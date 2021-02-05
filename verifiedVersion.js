const https = require("https");

let oldVersion = null;

function init() {
	
	let version = require("./package.json").version;
	
	if(oldVersion === null || oldVersion === "error") return console.log("[NazmaPackage - Err] An error occurred with the package, did you install the latest version?");
		
	if(oldVersion > version) return console.log("[NazmaPackage - Err] Your package is out of date, ordered \"npm update nazma.js\" to put the package with the new version " + global.latestVersion + "!");
  
};


https.get('https://www.npmjs.com/search/suggestions?q=nazma.js', (response) => {
	
	response.on('data', (chunk) => {
		
		oldVersion += chunk;
		
	});

	response.on('end', () => {
		
		oldVersion = JSON.parse(global.latestVersion)[0].version;
		
		init();
		
	});

}).on("error", (error) => {
	
    oldVersion = "error";
	
    init();
	
});