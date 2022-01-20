"use strict";

const { Permissions } = require("discord.js");

// Exportation de la fonction antiLinks

module.exports = (message, options) => {
	
	return new Promise((resolve, reject) => {
		
		if(!options.only || options.only !== true && options.only !== false) options.only = true;

		if(!options.messageDelete || options.messageDelete !== true && options.messageDelete !== false) options.messageDelete = false;
	
		if(!options.links || typeof options.links !== "array" && options.links !== null) options.links = null;
		
		if(!options.user || typeof options.user !== "object" || !options.user.id || !options.user.perm || typeof options.user.perm !== "string") reject("Vous devez obligatoirement inclure l'identifiant et la permission de l'utilisateur !");
		
		if(!message || typeof message !== "object") reject("Veuillez indiquer l'object du message à vérifier !");

		let linksDefault = [ 
		
			"http://",
			
			"https://",
			
			".gg/",
			
			".fr/",
			
			".com/",
			
			".tv/",
			
			".ml/",
			
			".eu/",
			
			"www."
			
		],
		
			foundLink = false;
			
		if(options.links !== null) {
			
			if(typeof options.links !== "object") reject("Veuillez indiquer une liste de liens à vérifier correcte !");
				
			for(let i = 0; options.links.length > i; i++) {

				if(!linksDefault.includes(String(options.links[i]).toLowerCase())) linksDefault.push(options.links[i]);
			
			}
			
		}
		
		for(let i in linksDefault) {

			if(message.content.toLowerCase().includes(String(linksDefault[i]).toLowerCase())) foundLink = true;

		}

		if(options.only && !message.guild.members.cache.get(options.user.id).permissions.has(Permissions.FLAGS["MANAGE_MESSAGES"]) && foundLink) {
		
			if(options.messageDelete ? message.guild.me.permissions.has(Permissions.FLAGS["MANAGE_MESSAGES"]) : false) message.delete().catch(() => {
				
				return;
			
			});
			
			resolve(true);
		
		} else resolve(false);
		
	});

};