"use strict";

// Exportations des fonctions dans les fichiers

const { timeFormat, replace, replaceAll, replaceMention, percentageNumber } = require("./src/fonctions.js");

const { mentionChannel, mentionRole, mentionUser, mentionTextUser } = require("./src/mentions.js");

const { version } = require("./package.json");

const { api } = require("./src/api/nazma.js");

// Exportations de toute les fonctions et données

module.exports = {
	
	// API
	
	api,
	
	// Les fonctions
	
	mysql: require("./src/mysql.js"),
	
	antiLinks: require("./src/fonctions/anti-links.js"),
	
	progressBar: require("./src/fonctions/progressBar.js"),

	textFormat: require("./src/fonctions/textFormat.js"),
	
	timeFormat,
	
	replace,
	
	replaceAll,
	
	replaceMention,
	
	percentageNumber,
	
	reducNumber: require("./src/fonctions/reducNumber.js"),
	
	checkPerm: require("./src/fonctions/checkPerm.js"),
	
	mentionChannel,
	
	mentionRole,
	
	mentionUser,
	
	mentionTextUser,

	// Les données classique du package

	version

};