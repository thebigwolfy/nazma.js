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
	
	if(!channelId) return "";
	
	if(checkNumber(channelId, false) === false) return checkNumber(channelId, true);
	
	return String(`<#${channelId}>`);
	
}

function mentionRole(roleId) {
	
	if(!roleId) return "";
	
	if(checkNumber(roleId, false) === false) return checkNumber(roleId, true);
	
	return String(`<@&${roleId}>`);
	
}

function mentionTextRole(roleId, text) {
	
	if(!roleId || !text) return "";
	
	if(checkNumber(roleId, false) === false) return checkNumber(roleId, true);

	return String(`${mentionRole(roleId)}, ${text}`);
	
}

function mentionUser(userId) {
	
	if(!userId) return "";
	
	if(checkNumber(userId, false) === false) return checkNumber(userId, true);
	
	return String(`<@${userId}>`);
	
}

function mentionTextUser(userId, text) {
	
	if(!userId || !text) return "";
	
	if(checkNumber(userId, false) === false) return checkNumber(userId, true);

	return String(`${mentionUser(userId)}, ${text}`);
	
}