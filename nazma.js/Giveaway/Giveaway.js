// Powered by the discord-giveaways package

const merge = require("deepmerge");

const Discord = require("discord.js");

const { EventEmitter } = require("events");

const { GiveawayEditOptions, GiveawayData, GiveawayMessages, GiveawayRerollOptions } = require("./Constants.js");

const GiveawaysManager = require("./Manager.js");

const { mentionUser } = require("../assets/mentions.js");

class Giveaway extends EventEmitter {
    
    constructor(manager, options) {
		
        super();
        
        this.manager = manager;
        
        this.client = manager.client;
        
        this.prize = options.prize;
        
        this.startAt = options.startAt;
        
        this.endAt = options.endAt;
        
        this.ended = options.ended;
        
        this.channelID = options.channelID;
        
        this.messageID = options.messageID;
        
        this.guildID = options.guildID;
        
        this.winnerCount = options.winnerCount;
        
        this.winnerIDs = options.winnerIDs;
        
        this.hostedBy = options.hostedBy;
        
        this.messages = options.messages;
        
        this.extraData = options.extraData;
        
        this.options = options;
        
        this.message = null;
		
    };

    get messageURL() {
		
        return `https://discord.com/channels/${this.guildID}/${this.channelID}/${this.messageID}`;
		
    };

    get remainingTime() {
		
        return this.endAt - Date.now();
		
    };

    get giveawayDuration() {
		
        return this.endAt - this.startAt;
		
    };

    get embedColor() {
		
        return this.options.embedColor || this.manager.options.default.embedColor;
		
    };

    get embedColorEnd() {
		
        return this.options.embedColorEnd || this.manager.options.default.embedColorEnd;
		
    };

    get reaction() {
		
        return this.options.reaction || this.manager.options.default.reaction;
		
    };

    get botsCanWin() {
		
        return this.options.botsCanWin || this.manager.options.default.botsCanWin;
		
    };

    get exemptPermissions() {
		
        return this.options.exemptPermissions || this.manager.options.default.exemptPermissions;
		
    };

    async exemptMembers(member) {
		
        if(this.options.exemptMembers && typeof this.options.exemptMembers === 'function') {
			
            try{
				
                const result = await this.options.exemptMembers(member);
				
                return result;
				
            }catch(error) {
				
                throw new Error(error);

            };
			
        };
		
        if(this.manager.options.default.exemptMembers && typeof this.manager.options.default.exemptMembers === 'function') return await this.manager.options.default.exemptMembers(member);

        return false;
		
    };

    get channel() {
		
        return this.client.channels.cache.get(this.channelID);
		
    };

    get remainingTimeText() {
		
        const roundTowardsZero = (this.remainingTime > Number(0) ? Number(Math.floor) : Number(Math.ceil));

        const days = roundTowardsZero(this.remainingTime / 86400000), hours = (roundTowardsZero(this.remainingTime / 3600000) % 24), minutes = (roundTowardsZero(this.remainingTime / 60000) % 60);
        
		let seconds = (roundTowardsZero(this.remainingTime / 1000) % 60);

        if (seconds === 0) seconds++;
		
        const isDay = days > 0, isHour = hours > 0, isMinute = minutes > 0;
		
        const dayUnit = (days < 2 && (this.messages.units.pluralS || this.messages.units.days.endsWith('s')) ? this.messages.units.days.substr(0, this.messages.units.days.length - 1) : this.messages.units.days), hourUnit = (hours < 2 && (this.messages.units.pluralS || this.messages.units.hours.endsWith('s')) ? this.messages.units.hours.substr(0, this.messages.units.hours.length - 1) : this.messages.units.hours), minuteUnit = (minutes < 2 && (this.messages.units.pluralS || this.messages.units.minutes.endsWith('s')) ? this.messages.units.minutes.substr(0, this.messages.units.minutes.length - 1) : this.messages.units.minutes), secondUnit = (seconds < 2 && (this.messages.units.pluralS || this.messages.units.seconds.endsWith('s')) ? this.messages.units.seconds.substr(0, this.messages.units.seconds.length - 1) : this.messages.units.seconds);
        
        const pattern = ((!isDay ? "" : `{days} ${dayUnit}, `) + (!isHour ? '' : `{hours} ${hourUnit}, `) + (!isMinute ? '' : `{minutes} ${minuteUnit}, `) + `{seconds} ${secondUnit}`);
        
        const content = this.messages.timeRemaining.replace('{duration}', pattern).replace('{days}', days.toString()).replace('{hours}', hours.toString()).replace('{minutes}', minutes.toString()).replace('{seconds}', seconds.toString());
        
		return content;
		
    };

    get data() {
		
        const baseData = {
			
            messageID: this.messageID,
			
            channelID: this.channelID,
			
            guildID: this.guildID,
			
            startAt: this.startAt,
			
            endAt: this.endAt,
			
            ended: this.ended,
			
            winnerCount: this.winnerCount,
			
            winners: this.winnerIDs,
			
            prize: this.prize,
			
            messages: this.messages,
			
            hostedBy: this.options.hostedBy,
			
            embedColor: this.options.embedColor,
			
            embedColorEnd: this.options.embedColorEnd,
			
            botsCanWin: this.options.botsCanWin,
			
            exemptPermissions: this.options.exemptPermissions,
			
            exemptMembers: this.options.exemptMembers,
			
            reaction: this.options.reaction,
			
            requirements: this.requirements,
			
            winnerIDs: this.winnerIDs,
			
            extraData: this.extraData
			
        };
		
        return baseData;
		
    };

    async fetchMessage() {
		
        return new Promise(async (resolve, reject) => {
			
            if(!this.messageID) return;
			
            const message = await this.channel.messages.fetch(this.messageID).catch(() => {});
			
            if(!message) {
				
                this.manager.giveaways = this.manager.giveaways.filter((g) => g.messageID !== this.messageID);
				
                this.manager.deleteGiveaway(this.messageID);
				
                return reject("NazmaJS - Gieaway - Unable to fetch message with ID: " + this.messageID);
				
            }
			
            this.message = message;
			
            resolve(message);
			
        });
		
    };

    async checkWinnerEntry(user) {
		
        const guild = this.channel.guild;
		
        const member = guild.member(user.id) || await guild.members.fetch(user.id).catch(() => {});
		
        if(!member) return false;
		
        const exemptMember = await this.exemptMembers(member);
		
        if(exemptMember) return false;
		
        const hasPermission = this.exemptPermissions.some((permission) => member.hasPermission(permission));
		
        if(hasPermission) return false;
		
        return true;
		
    };

    async roll(winnerCount) {
		
        if(!this.message) return [];
		
        const reactions = this.message.reactions.cache;
		
        const reaction = reactions.get(this.reaction) || reactions.find((r) => r.emoji.name === this.reaction);
		
        if(!reaction) return [];
		
        const guild = this.channel.guild;
  
        if (this.manager.options.hasGuildMembersIntent) await guild.members.fetch();
		
        const users = (await reaction.users.fetch()).filter((u) => !u.bot || u.bot === this.botsCanWin).filter((u) => u.id !== this.message.client.user.id);

        const rolledWinners = users.random(winnerCount || this.winnerCount);
		
        const winners = [];

        for(const u of rolledWinners) {
			
            const isValidEntry = await this.checkWinnerEntry(u) && !winners.some((winner) => winner.id === u.id);
			
            if(!isValidEntry) {
                
                for(const user of users.array()) {
					
                    const alreadyRolled = winners.some((winner) => winner.id === user.id);
					
                    if(alreadyRolled) continue;
					
                    const isUserValidEntry = await this.checkWinnerEntry(user);
					
                    if(isUserValidEntry) {
						
                        winners.push(user);
						
                        break;
						
                    } else continue;
					
                };
				
            } else winners.push(u);
			
        };

        return winners.map((user) => guild.member(user) || user);
		
    };

    edit(options = {}) {
		
        return new Promise(async (resolve, reject) => {
			
            if(this.ended) return reject("NazmaJS - Giveaway - Giveaway with message ID: " + this.messageID + " is already ended!");
            
            if(!this.channel) return reject("NazmaJS - Giveaway - Unable to get the channel of the giveaway with message ID: " + this.messageID);
			
            await this.fetchMessage().catch(() => {});
			
            if(!this.message) return reject("NazmaJS - Giveaway - Unable to fetch message with ID: " + this.messageID);
            
            
            if(options.newWinnerCount) this.winnerCount = options.newWinnerCount;
			
            if(options.newPrize) this.prize = options.newPrize;
			
            if(options.addTime) this.endAt = this.endAt + options.addTime;
			
            if(options.setEndTimestamp) this.endAt = options.setEndTimestamp;
			
            if(options.newMessages) this.messages = merge(this.messages, options.newMessages);
			
            if(options.newExtraData) this.extraData = options.newExtraData;
           
            await this.manager.editGiveaway(this.messageID, this.data);
			
            resolve(this);
			
        });
		
    };

    end() {
		
        return new Promise(async (resolve, reject) => {
			
            if(this.ended) return reject("NazmaJS - Giveaway - The giveaway with message ID: " + this.messageID + " is already ended!");
            
            if(!this.channel) return reject("NazmaJS - Giveaway - Unable to get the channel of the giveaway with message ID: " + this.messageID);
            
            this.ended = true;
			
            await this.fetchMessage().catch(() => {});
			
            if(!this.message) return reject("NazmaJS - Giveaway - Unable to fetch message with ID: " + this.messageID);
			
            const winners = await this.roll();
			
            this.manager.emit("giveawayEnded", this, winners);
			
            this.manager.editGiveaway(this.messageID, this.data);
			
            if(winners.length > 0) {
				
                this.winnerIDs = winners.map((w) => w.id);
				
                this.manager.editGiveaway(this.messageID, this.data);
				
                const embed = this.manager.generateEndEmbed(this, winners);
				
                this.message.edit(this.messages.giveawayEnded, { embed });
				
                const formattedWinners = winners.map((w) => mentionUser(w.id)).join(', ');
				
                this.message.channel.send(this.messages.winMessage.replace("{winners}", formattedWinners).replace("{prize}", this.prize).replace("{messageURL}", this.messageURL));
				
                resolve(winners);
				
            } else {
				
                const embed = this.manager.generateNoValidParticipantsEndEmbed(this);
				
                this.message.edit(this.messages.giveawayEnded, { embed });
				
                resolve();
				
            };
			
        });
		
    };

    reroll(options) {
		
        return new Promise(async (resolve, reject) => {
			
            if(!this.ended) return reject("NazmaJS - Giveaway - The giveaway with message ID: " + this.messageID + " is not ended!");

            if(!this.channel) return reject("NazmaJS - Giveaway - Unable to get the channel of the giveaway with message ID: " + this.messageID);

            await this.fetchMessage().catch(() => {});
			
            if(!this.message) return reject("NazmaJS - Giveaway - Unable to fetch message with ID: " + this.messageID);
			
            const winners = await this.roll(options.winnerCount);
			
            if(winners.length > 0) {
				
                this.winnerIDs = winners.map((w) => w.id);
				
                this.manager.editGiveaway(this.messageID, this.data);
				
                const embed = this.manager.generateEndEmbed(this, winners);
				
                this.message.edit(this.messages.giveawayEnded, { embed });
				
                const formattedWinners = winners.map((w) => mentionUser(w.id)).join(", ");
				
                this.channel.send(options.messages.congrat.replace("{winners}", formattedWinners).replace("{messageURL}", this.messageURL));
				
                resolve(winners);
				
            } else {
				
                this.channel.send(options.messages.error);
				
                resolve(new Array());
				
            };
			
        });
		
    };
	
};

module.exports = Giveaway;
