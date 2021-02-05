module.exports = {
	
	randomNumber,
	
	mentionUser,
	
	mentionRole,
	
	mentionChannel,
	
	getUser,
	
	formatColor,
	
	Embed: require("./Embed.js"),
	
	latestVersion: require("./verifiedVersion.js"),
	
	version: require("./package.json").version
	
};

function formatColor(color) {
	
    if((/^#([0-9A-F]{3}){1,2}$/i).test(color)) {
		
        let rawHex = color.substring(1);

        return parseInt(rawHex, 16);
		
    } else return console.log("[NazmaPackage - Err] The given color isn't a valid hexadecimal color representation.");
		
	return Number(color);
	
};

function randomNumber(max) {
	
	if(!max || !Number(max) || max < 0 || max === 0) return console.log("[NazmaPackage - Err] Please include an id of a number!");
		
	return Math.floor(Math.random() * Math.floor(max));

};

function mentionUser(userId) {
	
	let id = (userId.id === undefined ? userId.id : userId);
	
	if(!id || !Number(id)) return console.log("[NazmaPackage - Err] Please include an id of a discord user!");
	
	return ("<@" + id + ">");
	
};

function mentionRole(roleId) {
	
	let id = (roleId.id === undefined ? roleId.id : roleId);
	
	if(!id || !Number(id)) return console.log("[NazmaPackage - Err] Please include an id of a discord role!");
	
	return ("<@&" + id + ">");
	
};

function mentionChannel(channelId) {
	
	let id = (channelId.id === undefined ? channelId.id : channelId);
	
	if(!id || !Number(id)) return console.log("[NazmaPackage - Err] Please include an id of a discord channel!");
	
	return ("<#" + id + ">");
	
};

function getUser(user) {
	
	if(!user || user === undefined) return console.log("[NazmaPackage - Err] Please include an id of a discord user!");
	
	let data = {
		id: user.id,
		name: user.username,
		tag: user.tag,
		mention: ("<@" + user.id + ">")
	};
	
	return data;
	
};

function getAllUsers(mode, data) {
	
	let dataSort = null;
	
	if(!mode || mode === undefined) {
		
		dataSort = "error";
		
		console.log("[NazmaPackage - Err] Please include an mode ( example: guild, channel...) of a discord guild members!");
		
	};
	
	if(mode === "guild") {
		
		dataSort = data.members.cache.map(b = > b);
		
	} else {
		
		dataSort = "error";
		
		console.log("[NazmaPackage - Err] Please include an mode ( example: guild, channel...) of a discord guild members valide!");
		
	};
	
	return dataSort;
	
};