"use strict";

const { checkNumber, error } = require("../interne.js");

const fetch = require("node-fetch");

let app = String("http://pterodactyl.chaun14.fr:26016");

// Exportations des fonctions utile

module.exports = {
	
	api: {
		
		blacklist
		
	}
	
}

// Fonctions utile de l'api ( avec mot de passe )

function blacklist(type, options) {
	
	if(!type) return error("NazmaJS - Veuillez indiquer un type d'action avec l'api de la liste noire !", "default");
	
	if(String(type) === "add") {
		
		if(checkNumber(options.userID, false) === false) return checkNumber(options.userID, true);
	
		let body = {
					
			"password": options.password,

			"userID": options.userID,
			
			"reason": options.reason,
			
			"links": options.links
			
		}
			
		return fetch(String(app + "/blacklist/add"), {
			
			method: "POST",
			
			body: JSON.stringify(body),
			
			headers: {
				
				"Content-Type": "application/json"
				
			}
			
		});
		
	} else if(String(type) === "update") {
		
		if(checkNumber(options.userID, false) === false) return checkNumber(options.userID, true);
	
		let body = {
					
			"password": options.password,

			"userID": options.userID,
			
			"reason": options.reason,
			
			"links": options.links
			
		}
			
		return fetch(String(app + "/blacklist/update"), {
			
			method: "POST",
			
			body: JSON.stringify(body),
			
			headers: {
				
				"Content-Type": "application/json"
				
			}
			
		});
		
	} else if([ "remove", "del" ].includes(String(type))) {
		
		if(checkNumber(options.userID, false) === false) return checkNumber(options.userID, true);
	
		let body = {
					
			"password": options.password,

			"userID": options.userID
			
		}
			
		return fetch(String(app + "/blacklist/del"), {
			
			method: "POST",
			
			body: JSON.stringify(body),
			
			headers: {
				
				"Content-Type": "application/json"
				
			}
			
		});
		
	} else return error("NazmaJS - Veuillez indiquer un type d'action valide avec l'api de la liste noire !", "default");
	
}