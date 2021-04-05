"use strict";

// Powered by the discord-giveaways package

const { EventEmitter } = require("events");

const merge = require("deepmerge");

const { writeFile, readFile, exists } = require("fs");

const { promisify } = require("util");

const writeFileAsync = promisify(writeFile);

const existsAsync = promisify(exists);

const readFileAsync = promisify(readFile);

const Discord = require("discord.js");

const { defaultGiveawayMessages, defaultManagerOptions, defaultRerollOptions, GiveawayEditOptions, GiveawayData, GiveawayRerollOptions, GiveawaysManagerOptions, GiveawayStartOptions } = require("./constants.js");

const Giveaway = require("./giveaway.js");

const { mentionUser } = require("../assets/mentions.js");

class GiveawaysManager extends EventEmitter {
    
    constructor(client, options, init = true) {
		
        super();
		
        if (!client) throw new Error("NazmaJS - Giveaway - Client is a required.");
        
        this.client = client;
        
        this.ready = false;
        
        this.giveaways = [];
        
        this.options = merge(defaultManagerOptions, options);
		
        if(init) this._init();
		
    };

    
    generateMainEmbed(giveaway) {
		
        const embed = new Discord.MessageEmbed()
		
		.setAuthor(giveaway.prize)
		
        .setColor(giveaway.embedColor)
		
        .setFooter(giveaway.winnerCount + " " + giveaway.messages.winners + " • " + giveaway.messages.embedFooter)
		
        .setDescription(giveaway.messages.inviteToParticipate + "\n" + giveaway.remainingTimeText + "\n" + (giveaway.hostedBy ? giveaway.messages.hostedBy.replace("{user}", giveaway.hostedBy) : ""))
        
		.setTimestamp(new Date(giveaway.endAt).toISOString());
			
        return Object(embed);
		
    };

    generateEndEmbed(giveaway, winners) {
		
        const formattedWinners = winners.map((w) => mentionUser(w.id)).join(", ");
		
        const winnersString = giveaway.messages.winners.substr(0, 1).toUpperCase() + giveaway.messages.winners.substr(1, giveaway.messages.winners.length) + ": " + formattedWinners;
			
        const embed = new Discord.MessageEmbed()
		
        .setAuthor(giveaway.prize)
		
        .setColor(giveaway.embedColorEnd)
			
        .setFooter(giveaway.messages.endedAt)
			
        .setDescription(winnersString + "\n" + (giveaway.hostedBy ? giveaway.messages.hostedBy.replace("{user}", giveaway.hostedBy) : ""))
			
        .setTimestamp(new Date(giveaway.endAt).toISOString());
		
        return Object(embed);
		
    };

    generateNoValidParticipantsEndEmbed(giveaway) {
		
        const embed = new Discord.MessageEmbed()
		
		.setAuthor(giveaway.prize)
		
        .setColor(giveaway.embedColorEnd)
		
        .setFooter(giveaway.messages.endedAt)
			
        .setDescription(giveaway.messages.noWinner + "\n" + (giveaway.hostedBy ? giveaway.messages.hostedBy.replace("{user}", giveaway.hostedBy) : ""))
			
        .setTimestamp(new Date(giveaway.endAt).toISOString());
			
        return Object(embed);
		
    };

    end(messageID) {
        
		return new Promise(async (resolve, reject) => {
            
			const giveaway = this.giveaways.find((g) => g.messageID === messageID);
            
			if(!giveaway) return reject("NazmaJS - Giveaway - No giveaway found with ID: " + messageID);
            
			giveaway.end().then(resolve).catch(reject);
			
        });
		
    };

    start(channel, options) {
		
        return new Promise(async (resolve, reject) => {
			
            if(!this.ready) return reject("NazmaJS - The giveaway manager is not ready.");
				
            options.messages = (options.messages ? merge(defaultGiveawayMessages, options.messages) : defaultGiveawayMessages);
				
            if(!channel || !channel.id) return reject("NazmaJs - Giveaway - The channel is not a valid guildchannel (val=" + channel + ").");
			
            if(!options.time || isNaN(options.time)) return reject("NazmaJs - Giveaway - Option to options.time is not a number (val=" + options.time + ").");
			
            if(!options.prize) return reject("NazmaJs - Giveaway - Option to options.prize is not a string (val=" + options.prize + ").");
			
            if(!options.winnerCount || isNaN(options.winnerCount)) return reject("NazmaJS - Giveaway - Option to options.winnerCount is not a number (val=" + options.winnerCount + ").");
			
            const giveaway = new Giveaway(this, {
				
                startAt: Date.now(),
				
                endAt: (Date.now() + options.time),
				
                winnerCount: options.winnerCount,
				
                winnerIDs: [],
				
                channelID: channel.id,
				
                guildID: channel.guild.id,
				
                ended: false,
				
                prize: options.prize,
				
                hostedBy: (options.hostedBy ? options.hostedBy.toString() : null),
				
                messages: options.messages,
				
                reaction: options.reaction,
				
                botsCanWin: options.botsCanWin,
				
                exemptPermissions: options.exemptPermissions,
				
                exemptMembers: options.exemptMembers,
				
                embedColor: options.embedColor,
				
                embedColorEnd: options.embedColorEnd,
				
                extraData: options.extraData
				
            });
			
            let message = await channel.send(giveaway.messages.giveaway, { embed: this.generateMainEmbed(giveaway) });
			
            message.react(giveaway.reaction);
			
            giveaway.messageID = message.id;
			
            this.giveaways.push(giveaway);
			
            await this.saveGiveaway(giveaway.messageID, giveaway.data);
			
            resolve(giveaway);
			
        });
		
    };

    reroll(messageID, options = {}) {
		
        return new Promise(async (resolve, reject) => {
			
            options = merge(defaultRerollOptions, options);
			
            const giveawayData = this.giveaways.find((g) => g.messageID === messageID);
			
            if(!giveawayData) return reject("NazmaJS - Giveaway - No giveaway found with ID: " + messageID);

            const giveaway = new Giveaway(this, giveawayData);
			
            giveaway.reroll(options).then((winners) => {
				
                this.emit("giveawayRerolled", giveaway, winners);
					
                resolve();
					
            }).catch(reject);
				
        });
		
    };

    edit(messageID, options = {}) {
		
        return new Promise(async (resolve, reject) => {
			
            const giveaway = this.giveaways.find((g) => g.messageID === messageID);
			
            if(!giveaway) return reject("NazmaJS - Giveaway - No giveaway found with ID: " + messageID);

            giveaway.edit(options).then(resolve).catch(reject);
			
        });
		
    };

    delete(messageID, doNotDeleteMessage) {
		
        return new Promise(async (resolve, reject) => {
			
            const giveaway = this.giveaways.find((g) => g.messageID === messageID);
			
            if(!giveaway) return reject("NazmaJS - Giveaway - No giveaway found with ID: " + messageID);

            if (!giveaway.channel) return reject("NazmaJS - Giveaway - Unable to get the channel of the giveaway with message ID: " + giveaway.messageID);

            if(!doNotDeleteMessage) {
				
                await giveaway.fetchMessage().catch(() => {});
				
                if(giveaway.message) giveaway.message.delete();
                
            };
			
            this.giveaways = this.giveaways.filter((g) => g.messageID !== messageID);
			
            await this.deleteGiveaway(messageID);
			
            this.emit("giveawayDeleted", giveaway);
			
            resolve();
			
        });
		
    };

    async deleteGiveaway(messageID) {
		
        await writeFileAsync(this.options.storage, JSON.stringify(this.giveaways.map((giveaway) => giveaway.data)), "utf-8");
		
        return this.refreshStorage();
		
    };

    async refreshStorage() {
		
        return true;
		
    };

    async getAllGiveaways() {
		
        const storageExists = await existsAsync(this.options.storage);
		
        if(!storageExists) {

            await writeFileAsync(this.options.storage, "[]", "utf-8");
			
            return [];
			
        } else {

            const storageContent = await readFileAsync(this.options.storage);
			
            try{
				
                const giveaways = await JSON.parse(storageContent.toString());
				
                if(Array.isArray(giveaways)) return giveaways;
						
                console.log(storageContent, giveaways);
					
                throw new Error("NazmaJS - Giveaway - The storage file is not properly formatted (giveaways is not an array).");
				
            }catch(e) {
				
                if(e.message === "Unexpected end of JSON input") throw new Error("NazmaJS - Giveaway - The storage file is not properly formatted (Unexpected end of JSON input).");
					
                throw new Error("NazmaJS - Giveaway - Error: " + e);
				
            };
        };
    };

    async editGiveaway(messageID, giveawayData) {
		
        await writeFileAsync(this.options.storage, JSON.stringify(this.giveaways.map((giveaway) => giveaway.data)), "utf-8");
		
        return this.refreshStorage();
		
    };

    async saveGiveaway(messageID, giveawayData) {
		
        await writeFileAsync(this.options.storage, JSON.stringify(this.giveaways.map((giveaway) => giveaway.data)), "utf-8");
		
        return this.refreshStorage();
		
    };

    _checkGiveaway() {
		
        if(this.giveaways.length <= 0) return;
		
        this.giveaways.forEach(async (giveaway) => {
			
            if(giveaway.ended) return;
			
            if(!giveaway.channel) return;
			
            if(giveaway.remainingTime <= 0) return this.end(giveaway.messageID).catch(() => {});
            
            await giveaway.fetchMessage().catch(() => {});
			
            if(!giveaway.message) {
				
                giveaway.ended = true;
				
                return await this.editGiveaway(giveaway.messageID, giveaway.data);
				
            };
			
            giveaway.message.edit(giveaway.messages.giveaway, { embed: this.generateMainEmbed(giveaway) });
			
            if(giveaway.remainingTime < this.options.updateCountdownEvery) setTimeout(() => {
				
				this.end.call(this, giveaway.messageID);
				
			}, giveaway.remainingTime);
            
        });
		
    };

    async _handleRawPacket (packet) {
		
        if(![ "MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE" ].includes(packet.t)) return;
		
        const giveaway = this.giveaways.find((g) => g.messageID === packet.d.message_id);
		
        if(!giveaway) return;
		
        if(giveaway.ended && packet.t === "MESSAGE_REACTION_REMOVE") return;
		
        const guild = this.client.guilds.cache.get(packet.d.guild_id);
		
        if(!guild) return;
		
        if(packet.d.user_id === this.client.user.id) return;
		
        const member = (guild.members.cache.get(packet.d.user_id) || (await guild.members.fetch(packet.d.user_id).catch(() => {})));
		
        if(!member) return;
		
        const channel = guild.channels.cache.get(packet.d.channel_id);
		
        if(!channel) return;
		
        const message = (channel.messages.cache.get(packet.d.message_id) || (await channel.messages.fetch(packet.d.message_id)));
		
        if(!message) return;
		
        const reaction = message.reactions.cache.get(giveaway.reaction || this.options.default.reaction);
		
        if(!reaction) return;
		
        if(reaction.emoji.name !== packet.d.emoji.name) return;
		
        if(reaction.emoji.id && reaction.emoji.id !== packet.d.emoji.id) return;
		
        if(packet.t === "MESSAGE_REACTION_ADD") {
			
            if(giveaway.ended) return this.emit("endedGiveawayReactionAdded", giveaway, member, reaction);
			
            this.emit("giveawayReactionAdded", giveaway, member, reaction);
			
        } else this.emit("giveawayReactionRemoved", giveaway, member, reaction);
		
    };

    async _init() {
		
        const rawGiveaways = await this.getAllGiveaways();
		
        rawGiveaways.forEach((giveaway) => this.giveaways.push(new Giveaway(this, giveaway)));
		
        setInterval(() => {
			
            if(this.client.readyAt) this._checkGiveaway.call(this); 
			
		}, this.options.updateCountdownEvery);
		
        this.ready = true;
		
        if(!isNaN(this.options.endedGiveawaysLifetime) && this.options.endedGiveawaysLifetime) this.giveaways.filter((g) => g.ended && ((g.endAt + this.options.endedGiveawaysLifetime) <= Date.now())).forEach((giveaway) => this.deleteGiveaway(giveaway.messageID));

        this.client.on("raw", (packet) => this._handleRawPacket(packet));
    };
	
};

module.exports = {
	
	GiveawaysManager
	
};