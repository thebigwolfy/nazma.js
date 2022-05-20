"use strict";

// Extention de discord.js

require("./discordjs/index.js");

// Exportations de toute les fonctions

exports.checkBot = require("./fonctions/checkBot.js");
exports.antiLinks = require("./fonctions/antiLinks.js");
exports.progressBar = require("./fonctions/progressBar.js");
exports.percentageNumber = require("./fonctions/percentageNumber.js");
exports.reducNumber = require("./fonctions/reducNumber.js");
exports.mysql = require("./fonctions/mysql/index.js");

// Autres

exports.version = require("../package.json").version;