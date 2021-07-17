"use strict";

const { error } = require("./interne.js");

// Exportations dede la fonction antiLinks

module.exports = (client, message, options) => {
	
	return new Promise((resolve, reject) => {

		let links = [ 
		
			"http://",
			
			"https://",
			
			".gg/",
			
			"/invite/",
			
			"www."
			
		],
		
			only = true,
			
			foundLink = false;
			
		if(String(options.only) === "false") only = false;
			
		if(options.links) {
			
			if(typeof options.links !== "object") reject("NazmaJS - Veuillez indiquer une liste de liens correcte !");
				
			for(let i = 0; options.links.length > i; i++) {

				if(!links.includes(String(options.links[i]).toLowerCase())) links.push(options.links[i]);
			
			}
			
		}
		
		if(!options.permsUser) options.permsUser = false;
		
		if(!options.permsBot) options.permsBot = false;
		
		for(let i in links) {

			if(message.content.toLowerCase().includes(String(links[i]).toLowerCase())) foundLink = true;

		}

		if(only && !options.permsUser && foundLink) {
		
			if(options.permsBot) message.delete().catch(() => {
				
				return;
			
			});
			
			resolve(true);
		
		} else resolve(false);
		
	});

};