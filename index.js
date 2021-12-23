"use strict";

// Extractions des autres packages

const { readdirSync } = require("fs");

const { version } = require("./package.json");

// Extention de discord.js

require("discordjs_extenders.js");

// Exportations de toute les fonctions

let fonctions = {
	version
};

const files = readdirSync("./fonctions").filter(file => file.endsWith(".js"));

for(const file of files) {

	const fileExport = require(`./fonctions/${file}`);

	fonctions[String(file)] = fileExport;

};

module.exports = fonctions;