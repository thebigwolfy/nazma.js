const { mentionUser, mentionChannel } = require("./mentions.js");

module.exports = {

	getGuild,
	
	getChannel,
	
	getUser,
	
	getAllUsers

};

function getGuild(guild) {
	
	if(!guild || guild === undefined) throw new Error("NazmaJS - Please include an data of a discord guild!");
	
	let data = {
		
		id: guild.id,
		
		name: guild.name,
		
		roles: guild.roles.cache,
		
		channels: guild.channels.cache,
		
		members: guild.members.cache,
		
		users: guild.members.cache
		
	};
	
	return Object(data);
	
};

function getChannel(channel) {
	
	if(!channel || channel === undefined) throw new Error("NazmaJS - Please include an data of a discord channel!");
	
	let data = {
		
		id: channel.id,
		
		name: channel.name,
		
		mention: mentionChannel(channel)
		
	};
	
	return Object(data);
	
};

function getUser(user) {
	
	if(!user || user === undefined) throw new Error("NazmaJS - Please include an data of a discord user!");
	
	let data = {
		
		id: user.id,
		
		name: user.username,
		
		tag: user.tag,
		
		discriminator: user.discriminator,
		
		mention: mentionUser(user)

	};
	
	return Object(data);
	
};

function getAllUsers(mode, data) {
	
	let dataSort = null;
	
	if(!mode || mode === undefined) throw new Error("NazmaJS - Please include an mode (example: guild) of a discord guild members!");
	
	if(mode === "guild") {
		
		dataSort = data.members.cache.map(b => getUser(b));
		
	} else throw new Error("NazmaJS - Please include an mode (example: guild)!");
	
	return Array(dataSort);
	
};