"use strict";

const { error, checkNumber } = require("./interne.js");

// Exportations des fonctions utile

module.exports = {
	
	mentionChannel,
	
	mentionRole,
	
	mentionUser,
	
	mentionTextUser
	
}

// Fonctions utile

function mentionChannel(channelId) {
	
	if(!channelId) return;
	
	if(checkNumber(channelId, false) === false) return checkNumber(channelId, true);
	
	return String("<#" + channelId +  ">");
	
}

function mentionRole(roleId) {
	
	if(!roleId) return;
	
	if(checkNumber(roleId, false) === false) return checkNumber(roleId, true);
	
	return String("<@&" + roleId +  ">");
	
}

function mentionUser(userId) {
	
	if(!userId) return;
	
	if(checkNumber(userId, false) === false) return checkNumber(userId, true);
	
	return String("<@" + userId +  ">");
	
}

function mentionTextUser(userId, text) {
	
	if(!userId) return;
	
	if(!text) return;
	
	if(checkNumber(userId, false) === false) return checkNumber(userId, true);

	return String(String(mentionUser(userId)) + String(", ") + String(text));
	
}