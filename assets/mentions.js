"use strict";

module.exports = {
	
	mentionText,
	
	mentionTextUser,

	mentionUser,
	
	mentionRole,
	
	mentionChannel

};

function mentionUser(userId) {
	
	let id = (userId.id !== undefined ? userId.id : userId);
	
	if(!id || !Number(id)) throw new Error("NazmaJS - Please include an id are data of a discord user!");
	
	return String("<@" + id + ">");
	
};

function mentionRole(roleId) {
	
	let id = (roleId.id !== undefined ? roleId.id : roleId);
	
	if(!id || !Number(id)) throw new Error("NazmaJS - Please include an id are data of a discord role!");
	
	return String("<@&" + id + ">");
	
};

function mentionChannel(channelId) {
	
	let id = (channelId.id !== undefined ? channelId.id : channelId);
	
	if(!id || !Number(id)) throw new Error("NazmaJS - Please include an id are data of a discord channel!");
	
	return String("<#" + id + ">");
	
};

function mentionTextUser(userId, text) {
	
	let id = (userId.id !== undefined ? userId.id : userId);
	
	if(!id || !Number(id)) throw new Error("NazmaJS - Please include an id are data of a discord user!");
	
	if(!text || !String(text)) throw new Error("NazmaJS - Please include an text typeOf String!");
	
	return String(String(mentionUser(id)) + String(", " + String(text)));
	
};

function mentionText(dataId, mode, text) {
	
	let id = (dataId.id !== undefined ? dataId.id : dataId);
	
	if(!id || !Number(id)) throw new Error("NazmaJS - Please include an id are data of a discord mention data!");
	
	if(!String(mode)) throw new Error("NazmaJS - Please include an mode typeOf String!");
	
	let results = String((String(mode) === String("user") ? String(mentionUser(id)) : (String(mode) === String("role") ? String(mentionRole(id)) : (String(mode) === String("channel") ? String(mentionChannel(id)) : String(undefined)))));
	
	if(results === undefined) throw new Error("NazmaJS - The data mode is undefined (ex: user, channel are role)!");
	
	if(!text || !String(text)) throw new Error("NazmaJS - Please include an text typeOf String!");
	
	if(String(mode) === String("user")) results = String(results + String(", " + String(text)));
	
	if(String(mode) === String("channel")) results = String(results + String(" " + String(text)));
	
	if(String(mode) === String("role")) results = String(results + String(" - " + String(text)));
	
	return String(results);
	
};