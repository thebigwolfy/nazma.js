const { mentionUser, mentionRole, mentionChannel } = require("./assets/mentions.js");

const { getGuild, getChannel, getUser, getAllUsers } = require("./assets/gets.js");

const { formatColor, randomNumber, randomNumberMax, randomNumberFloor, numberDivide, numberAdd, numberRemove, numberMultiply } = require("./assets/all.js");

const { Client } = require("./Discord/Client.js");

const { GiveawaysManager } = require("./Giveaway/Manager.js");

const { mysql } = require("./db/mysql.js");

module.exports = {
	
	Client: Client,
	
	mysql: mysql,
	
	GiveawaysManager: GiveawaysManager,
	
	doc: "soon",
	
	mentionUser: mentionUser,
	
	mentionRole: mentionRole,
	
	mentionChannel: mentionChannel,
	
	mUser: mentionUser,
	
	mRole: mentionRole,
	
	mChannel: mentionChannel,
	
	getGuild: getGuild,
	
	getChannel: getChannel,
	
	getUser: getUser,
	
	getUserData: getUser,
	
	getAllUsers: getAllUsers,
	
	formatColor: formatColor,
	
	numberAdd: numberAdd,
	
	numberRemove: numberRemove,
	
	numberMultiply: numberMultiply,
	
	numberDivide: numberDivide,
	
	randomNumber: randomNumber,
	
	randomNumberMax: randomNumberMax,
	
	randomNumberFloor: randomNumberFloor,

	Embed: require("./assets/Embed.js"),
	
	oldVersion: require("./verifiedVersion.js").oldVersion,
	
	description: require("./package.json").description,
	
	creator: require("./package.json").author.name,
	
	name: require("./package.json").name,
	
	version: require("./package.json").version
	
};