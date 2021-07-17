"use strict";

// Exportations des fonctions dans les fichiers

const { textFormat, timeFormat, replace, replaceAll, replaceMention, percentageNumber, reducNumber } = require("./src/fonctions.js");

const { mentionChannel, mentionRole, mentionUser, mentionTextUser } = require("./src/mentions.js");

const { name, version } = require("./package.json");

const { api } = require("./src/api/nazma.js");

const antiLinks = require("./src/anti-links.js");

// Exportations de toute les fonctions et données

module.exports = {
	
	// API
	
	api,
	
	// Fonctions améliorer
	
	antiLinks,

	// Fontions utile
	
	textFormat,
	
	timeFormat,
	
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
	
	// Fonction pour la base de donnée SQL
	
	mysql: require("./src/mysql.js"),

	// Les données classique du package

	name,
	
	version

};