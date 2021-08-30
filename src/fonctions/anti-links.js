"use strict";

const checkPerm = require("./checkPerm.js");

// Exportation de la fonction antiLinks

module.exports = (message, options) => {
	
	return new Promise((resolve, reject) => {
		
		if(!options.only) options.only = true;
	
		if(!options.links) options.links = null;
		
		if(!options.messageDelete) options.messageDelete = false;
	
		if(!options.user || typeof options.user !== "object" || !options.user.id || !options.user.perm || typeof options.user.perm !== "string") throw new Error("Vous devez obligatoirement inclure l'identifiant et la permission de l'utilisateur !");
		
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

		if(options.only && !checkPerm({
			
			guild: message.guild,
			
			userId: options.user.id,
			
			perm: options.user.perm
			
		}) && foundLink) {
		
			if(options.messageDelete ? checkPerm({
			
				guild: message.guild,
				
				userId: message.guild.me.id,
				
				perm: "MANAGE_MESSAGES"
				
			}) : false) message.delete().catch(() => {
				
				return;
			
			});
			
			resolve(true);
		
		} else resolve(false);
		
	});

};