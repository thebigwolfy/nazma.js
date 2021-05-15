"use strict";

// Exportations des fichiers

const { textFormat, replace, replaceAll, replaceMention, percentageNumber, reducNumber } = require("./src/fonctions.js");

const { mentionChannel, mentionRole, mentionUser, mentionTextUser } = require("./src/mentions.js");

const { name, version } = require("./package.json");

// Exportations de toute les fonctions et données

module.exports = {

	// Fontions utile
	
	textFormat,
	
	replace,
	
	replaceAll,
	
	replaceMention,
	
	percentageNumber,
	
	reducNumber,
	
	// Fonctions complément
	
	mentionChannel,
	
	mentionRole,
	
	mentionUser,
	
	mentionTextUser,
	
	// Fonction pour la bae de donnée sql
	
	mysql: require("./src/mysql.js").sql,

	// Les données classique

	name,
	
	version

}