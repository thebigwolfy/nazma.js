const https = require("https");

const version = require("./package.json").version;

let oldVersion = null;

function init() {
	
	if(oldVersion === null || oldVersion === "error") return console.log("NazmaJS - An error occurred with the package, did you install the latest version?");
		
	if(Number(oldVersion) < Number(version)) return console.log("NazmaJS - Your package is out of date, ordered 'npm update nazma.js' to put the package with the new version " + oldVersion + "!");
  
};

https.get("https://www.npmjs.com/package/nazma.js", (response) => {
	
	response.on("data", (chunk) => {
		
		oldVersion += chunk;
		
	});

	response.on("end", () => {
		
		oldVersion = oldVersion[0].version;
		
		init();
		
	});

}).on("error", (error) => {
	
    oldVersion = "error";
	
    init();
	
});

module.exports.oldVersion = oldVersion;