"use strict";

const { checkNumber } = require("../interne.js");

const fetch = require("node-fetch");

const app = "http://pterodactyl.chaun14.fr:26016";

// Exportations des fonctions utile ( api )

module.exports.api = {
	
	blacklist
	
};

function blacklist(type, password, options) {
	
	if(!type || typeof type !== "string") throw new Error("Veuillez indiquer un type d'action avec l'api de la liste noire !");
	
	if(!password || typeof password !== "string") throw new Error("Veuillez indiquer un mot de passe valide !");
	
	if(String(type) === "list") return fetch(`${app}/blacklist/list`, {
			
		method: "POST",
		
		body: JSON.stringify({
				
			"password": password
			
		}),
		
		headers: {
			
			"Content-Type": "application/json"
			
		}
		
	});
	
	else if(String(type) === "add") {
		
		if(!checkNumber(options.userID, false)) return checkNumber(options.userID, true);
	
		return fetch(`${app}/blacklist/add`, {
			
			method: "POST",
			
			body: JSON.stringify({
					
				"password": password,

				"userID": options.userID,
				
				"reason": options.reason,
				
				"links": options.links
				
			}),
			
			headers: {
				
				"Content-Type": "application/json"
				
			}
			
		});
		
	} else if(String(type) === "update") {
		
		if(!checkNumber(options.userID, false)) return checkNumber(options.userID, true);
	
		return fetch(`${app}/blacklist/update`, {
			
			method: "POST",
			
			body: JSON.stringify({
					
				"password": password,

				"userID": options.userID,
				
				"reason": options.reason,
				
				"links": options.links
				
			}),
			
			headers: {
				
				"Content-Type": "application/json"
				
			}
			
		});
		
	} else if([ "remove", "del" ].includes(String(type))) {
		
		if(!checkNumber(options.userID, false)) return checkNumber(options.userID, true);
	
		return fetch(`${app}/blacklist/del`, {
			
			method: "POST",
			
			body: JSON.stringify({
					
				"password": password,

				"userID": options.userID
				
			}),
			
			headers: {
				
				"Content-Type": "application/json"
				
			}
			
		});
		
	} else throw new Error("NazmaJS - Veuillez indiquer un type d'action valide avec l'api de la liste noire !");
	
};