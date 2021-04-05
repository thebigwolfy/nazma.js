const crypto = require('crypto');

const randomNumber = require("./all.js").randomNumberMax;

const RANDOM_BATCH_SIZE = 256;

let randomIndex, randomBytes;

module.exports = {
	
	generate,
	
	generateMultiple
	
};

let lowercase = 'abcdefghijklmnopqrstuvwxyz', uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers = '0123456789', symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~', similarCharacters = /[ilLI|`oO0]/g, strictRules = [
	
	{
		
		name: "lowercase",
		
		rule: /[a-z]/
		
	},
	
	{
		
		name: "uppercase",
		
		rule: /[A-Z]/
		
	},
	
	{
		
		name: "numbers",
		
		rule: /[0-9]/
		
	},
	
	{
		
		name: "symbols",
		
		rule: /[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/
		
	}
	
];

function generateData(options, pool) {
	
	let password = "", optionsLength = options.length, poolLength = pool.length;

	for(var i = 0; i < optionsLength; i++) {
		
		password += pool[randomNumber(poolLength)];
		
	}

	if(options.strict) {

		let fitsRules = strictRules.every(function(rule) {

			if(options[rule.name] == false) return true;

			if(rule.name === "symbols" && typeof options[rule.name] === "string") return new RegExp("[" + options[rule.name] + "]").test(password);

			return rule.rule.test(password);
			
		});
		
		if (!fitsRules) return generateData(options, pool);
		
	};

	return password;
	
};

function generateMultiple(options) {

	options = options || {};
	
	if (!Object.prototype.hasOwnProperty.call(options, "length")) options.length = 10;
	
	if (!Object.prototype.hasOwnProperty.call(options, "numbers")) options.numbers = false;
	
	if (!Object.prototype.hasOwnProperty.call(options, "symbols")) options.symbols = false;
	
	if (!Object.prototype.hasOwnProperty.call(options, "exclude")) options.exclude = "";
	
	if (!Object.prototype.hasOwnProperty.call(options, "uppercase")) options.uppercase = true;
	
	if (!Object.prototype.hasOwnProperty.call(options, "lowercase")) options.lowercase = true;
	
	if (!Object.prototype.hasOwnProperty.call(options, "excludeSimilarCharacters")) options.excludeSimilarCharacters = false;
	
	if (!Object.prototype.hasOwnProperty.call(options, "strict")) options.strict = false;

	if (options.strict) {
		
		var minStrictLength = 1 + (options.numbers ? 1 : 0) + (options.symbols ? 1 : 0) + (options.uppercase ? 1 : 0);
		
		if(minStrictLength > options.length) throw new Error("NazmaJS - Length must correlate with strict guidelines.");
		
	}

	let pool = "";

	if (options.lowercase) pool += lowercase;

	if (options.uppercase) pool += uppercase;

	if(options.numbers) pool += numbers;

	if(options.symbols) {
		
		if(typeof options.symbols === "string") pool += options.symbols;
		
		else pool += symbols;

	};

	if(!pool) throw new Error("NazmaJS - At least one rule for pools must be true.");
	
	if(options.excludeSimilarCharacters) pool = pool.replace(similarCharacters, "");

	var i = options.exclude.length;
	
	while (i--) {
		
		pool = pool.replace(options.exclude[i], "");
		
	};

	return generateData(options, pool);
	
};

function generate(amount, options) {
	
	let passwords = [];

	for(var i = 0; i < amount; i++) {
		
		passwords[i] = generateMultiple(options);
		
	};

	return passwords;
	
};

function getNextRandomValue() {
	
	if (randomIndex === undefined || randomIndex >= randomBytes.length) {
		
		randomIndex = 0;
		
		randomBytes = crypto.randomBytes(RANDOM_BATCH_SIZE);
		
	};

	let result = randomBytes[randomIndex];
	
	randomIndex += 1;

	return result;
	
};