const { join } = require("path");
const EventEmitter = require("events");
const rss = require("rss-parser");
const parser = new rss();

if(typeof(localStorage) == "undefined" || typeof(localStorage) == "null") {
	
	var LocalStorage = require("node-localstorage").LocalStorage;
  
	localStorage = new LocalStorage(join(__dirname, "storage"));
  
};

class Youtube extends EventEmitter {
	
	constructor(options = {
			
		channel: null, 
			
		check_time: 60
			
	}) {
		
		super();
		
		if(!options.channel || options.channel === null) throw new Error("NazmaJS - Youtube - Channel is empty or null.");
		
		if(!options.check_time)options.check_time = 60;

		if(typeof(options.check_time) != "number") throw new Error("NazmaJS - Youtube - Check time must be a number.");
		
		if(options.check_time < 30) throw new Error("NazmaJS - Youtube - Check time is too short. Short intervals can cause problems.");

		parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${options.channel}`).then(response => {
			
			let videoid = response.items[0].id.replace("yt:video:", "");
			
			localStorage.setItem(videoid, videoid);
		  
		}).catch(err => {
			
			if(err.message == "Status code 404") throw new Error("NazmaJS - Youtube - Channel not found. Channel ID: " + options.channel);
		
			throw new Error("NazmaJS - Youtube - Error: " + err);
		
		});

		setInterval(() => {
			
			parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${options.channel}`).then(response => {
			  
				let item = response.items[0];
				
				const video = {}
				
				video.channelName = item.author;
				
				video.title = item.title;
				
				video.publishDate = (item.pubDate.split("T")[0] + item.pubDate.split("T")[1].replace(".000Z", ""));
				
				video.url = item.link;
				
				video.id = item.id.replace("yt:video:", "");
				
				if(localStorage.getItem(video.id)) return;
				
				localStorage.setItem(video.id, video.id);
				
				this.emit("video", video);
		
			}).catch(err => {
				
				if(err.message == "Status code 404") throw new Error("NazmaJS - Youtube - Channel not found. Channel ID: " + options.channel);
				
				throw new Error("NazmaJS - Youtube - Error: " + err);
				
			});
		  
		}, options.check_time * 1000);
	
	};
	
};

module.exports = {
	
	Youtube
	
};