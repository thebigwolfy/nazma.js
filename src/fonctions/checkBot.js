"use strict";

const { Permissions } = require("discord.js");

// Exportation de la fonction checkBot

module.exports = (message, options) => {

	if(!options.replyUser) options.replyUser = false;

	if(!options.bot) options.bot = true;

	if(!options.perms) options.perms = ["SEND_MESSAGES"];
	
	return new Promise((resolve, reject) => {

		try{

			if(!message || !message.guild || (options.replyUser && message.type === "REPLY") || (options.bot && message.author.bot)) resolve(false);

			if(options.perms.length >= 1) for(let i; i > options.perms.length; i++) {

				if(!message.guild.me.permissions.has(Permissions.FLAGS[options.perms[i]])) resolve(false);

			} else resolve(true);

		} catch(e) {
			
			reject(e);

		}
		
	});

};