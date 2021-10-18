"use strict";

const { FLAGS } = require("discord.js").Permissions;

// Exportation de la fonction checkBot

module.exports = (message) => {
	
	return new Promise((resolve, reject) => {

		try{

			if(
				
				!message
				
				|| !message.guild
				
				|| message.author.bot
				
				|| !message.guild.me.permissions.has(FLAGS.SEND_MESSAGES)
				
				|| !message.guild.me.permissions.has(FLAGS.EMBED_LINKS)
				
			) resolve(false);

			resolve(true);

		} catch (error) {
			
			reject(error);

		}
		
	});

};