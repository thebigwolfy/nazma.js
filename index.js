"use strict";

// Exportations de toute les fonctions

module.exports = {
	
	// Les fonctions

	checkBot: require("./fonctions/checkBot.js"),
	
	antiLinks: require("./fonctions/antiLinks.js"),
	
	progressBar: require("./fonctions/progressBar.js"),
	
	timeFormat: require("./fonctions/timeFormat.js"),
	
	percentageNumber: require("./fonctions/percentageNumber.js"),

	textFormat: require("./fonctions/textFormat.js"),
	
	reducNumber: require("./fonctions/reducNumber.js"),
	
	checkPerm: require("./fonctions/checkPerm.js"),
	
	mysql: require("./fonctions/mysql.js"),

	// Version du package

	issues: require("./package.json").bugs.url,

	version: require("./package.json").version

};