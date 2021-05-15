"use strict";

const { checkNumber } = require("./interne.js");

// Exportations des fonctions utile

module.exports = {
	
	mentionChannel,
	
	mentionRole,
	
	mentionUser,
	
	mentionTextUser
	
}

// Fonctions utile

function mentionChannel(channelId) {
	
	if(checkNumber(channelId) !== undefined) throw new Error(checkNumber(channelId));
	
	return String("<#" + channelId +  ">");
	
}

function mentionRole(roleId) {
	
	if(checkNumber(roleId) !== undefined) throw new Error(checkNumber(roleId));
	
	return String("<@&" + roleId +  ">");
	
}

function mentionUser(userId) {
	
	if(checkNumber(userId) !== undefined) throw new Error(checkNumber(userId));
	
	return String("<@" + userId +  ">");
	
}

function mentionTextUser(userId, text) {
	
	if(checkNumber(userId) !== undefined) throw new Error(checkNumber(userId));
	
	if(!text || typeof String(text) !== "string") throw new Error("NazmaJS - Veuillez indiquer un texte !");
	
	return String(String(mentionUser(userId)) + String(", ") + String(text));
	
}