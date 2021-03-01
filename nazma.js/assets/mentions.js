module.exports = {

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