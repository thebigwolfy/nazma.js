const Discord = require("discord.js");

class Client extends Discord.Client {
	
	constructor(token, config, prefix) {
		
		if(!token) throw new Error("NazmaJS - Please indicate the token of your discord bot.");
		
		if(!config) throw new Error("NazmaJS - Please indicate the configuration file of your discord bot.");
		
		if(!prefix) throw new Error("NazmaJS - Please indicate the prefix of your discord bot.");
		
		super({ 
		
			messageCacheMaxSize: 15,
			
			disableMentions: 'everyone',
			
			fetchAllMembers: true
			
		});
		
		this.token = token;
		
		this.config = config;
			
		this.prefix = prefix;
		
	};
	
};

module.exports = {
	
	Client
	
};