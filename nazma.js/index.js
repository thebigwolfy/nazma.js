"use strict";

const { mentionUser, mentionRole, mentionChannel, mentionText, mentionTextUser } = require("./assets/mentions.js");

const { getGuild, getChannel, getUser, getAllUsers } = require("./assets/gets.js");

const { formatColor, toString, mysql, toObject, textFormat, randomNumber, randomNumberMax, randomNumberFloor, numberDivide, numberAdd, numberRemove, numberMultiply } = require("./assets/all.js");

const { generate, generateMultiple } = require("./assets/generate-password.js");

module.exports = {
	
	generate,
	
	generateMultiple,
	
	mentionText,
	
	mentionTextUser,

	mentionUser,
	
	mentionRole,
	
	mentionChannel,
	
	mTextUser: mentionTextUser,
	
	mText: mentionText,
	
	mUser: mentionUser,
	
	mRole: mentionRole,
	
	mChannel: mentionChannel,
	
	getGuild,
	
	getChannel,
	
	getUser,
	
	getMember: getUser,
	
	getUserData: getUser,
	
	getAllUsers,
	
	formatColor,
	
	textFormat,
	
	toString,
	
	toObject,
	
	numberAdd,
	
	numberRemove,
	
	numberMultiply,
	
	numberDivide,
	
	randomNumber,
	
	randomNumberMax,
	
	randomNumberFloor,
	
	GiveawaysManager: require("./Giveaway/manager.js"),
	
	Youtube: require("./Youtube/manager.js"),
	
	mysql,
	
	Client: require("./Discord/client.js"),

	Embed: require("./assets/embed.js"),

	urlBug: require("./package.json").bugs.url,
	
	description: require("./package.json").description,
	
	creator: require("./package.json").author.name,
	
	name: require("./package.json").name,
	
	oldVersion: require("./package.json").oldVersion,
	
	version: require("./package.json").version
	
};