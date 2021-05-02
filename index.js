"use strict";

// Exportations de toute les fonctions et données

module.exports = {

	// Fontions utile
	
	textFormat: require("./src/fonctions.js").textFormat,
	
	percentageNumber: require("./src/fonctions.js").percentageNumber,
	
	reducNumber: require("./src/fonctions.js").reducNumber,
	
	// Fonctions complément
	
	mentionChannel: require("./src/mentions.js").mentionChannel,
	
	mentionRole: require("./src/mentions.js").mentionRole,
	
	mentionUser: require("./src/mentions.js").mentionUser,
	
	mentionTextUser: require("./src/mentions.js").mentionTextUser,
	
	// Fonction pour la bae de donnée sql
	
	mysql: require("./src/mysql.js"),

	// Les données classique

	name: require("./package.json").name,
	
	version: require("./package.json").version

}