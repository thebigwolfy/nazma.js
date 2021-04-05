"use strict";

module.exports = {

	formatColor,
	
	toString,
	
	toObject,
	
	textFormat,
	
	randomNumber,
	
	randomNumberMax,
	
	randomNumberFloor,
	
	numberAdd,
	
	numberRemove,
	
	numberMultiply,
	
	numberDivide

};

function textFormat(text) {
	
	if(text === undefined || text === null) throw new Error("NazmaJS - Please indicate a text!");
	
	return String("`" + text + "`");
	
};

function toString(data) {
	
	return String(data !== undefined ? (data !== null ? data : undefined) : undefined);
	
};

function toObject(data) {
	  
    return Object(data !== undefined ? (data !== null ? data : undefined) : undefined);
	
};

function numberAdd(one, two) {
	
	if(one === undefined || one === null) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(two === undefined || two === null) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(typeof one !== "number" && typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(typeof one !== "number") throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid second number!");
	
	return Number(Number(one) + Number(two));
	
};

function numberRemove(one, two) {
	
	if(one === undefined || one === null) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(two === undefined || two === null) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(typeof one !== "number" && typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(typeof one !== "number") throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid second number!");
	
	return Number(Number(one) - Number(two));
	
};

function numberMultiply(one, two) {
	
	if(one === undefined || one === null) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(two === undefined || two === null) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(typeof one !== "number" && typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(typeof one !== "number") throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid second number!");
	
	return Number(Number(one) * Number(two));
	
};

function numberDivide(one, two) {
	
	if(one === undefined || one === null) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(two === undefined || two === null) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(typeof one !== "number" && typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(typeof one !== "number") throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid second number!");
	
	return Number(Number(one) / Number(two));
	
};

function numberPercentage(data, total) {
	
	if(data === undefined || data === null) throw new Error("NazmaJS - Please indicate a number data!");
	
	if(total === undefined || total === null) throw new Error("NazmaJS - Please indicate a total number data!");
	
	if(typeof one !== "number" && typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid number data and total!");
	
	if(typeof one !== "number") throw new Error("NazmaJS - Please indicate a valid number data!");
	
	if(typeof two !== "number") throw new Error("NazmaJS - Please indicate a valid number total!");
	
	if(Number(data) > Number(total)) throw new Error("NazmaJS - Please indicate a total number that is not equal to or less than the number of data!");
	
	return String(Number(Number(one) * Number(100) / Number(total)) + "%");
	
};

function formatColor(color) {
	
	let colors = color;
	
	if((/^#([0-9A-F]{3}){1,2}$/i).test(colors)) {
		
		colors = parseInt(colors.substring(1), 16);
		
	} else throw new Error("NazmaJS - The given color isn't a valid hexadecimal color representation.");
		
	return Number(colors);
	
};

function randomNumberFloor() {
	
	return Number(Math.random());
	
};

function randomNumber(min, max) {
	
	if(!min || typeof min !== "number") throw new Error("NazmaJS - Please include an id min of a number!");
	
	if(Number(min) <= Number(1)) throw new Error("NazmaJS - Please include an id min of a number in a minimum 2!");
	
	if(!max || typeof max !== "number" || max < 0 || max === 0) throw new Error("NazmaJS - Please include an id max of a number!");
	
	if(Number(min) > Number(max)) throw new Error("NazmaJS - Please include an id min of a number not egal max number!");
	
	if(Number(min) !== Number(max)) return Number(max);
		
	return Number(Math.floor(Number(min) * Math.floor(Number(max))));

};

function randomNumberMax(max) {
	
	if(!max || typeof max !== "number" || max < 0 || max === 0) throw new Error("NazmaJS - Please include an id of a number!");
	
	return Number(Math.floor(Number(randomNumberSystem(max)) * Math.floor(Number(max))));

};

function randomNumberSystem(maxNumber) {
	
	let max = Number(maxNumber), random = Number(Math.random());
	
	if(max === random) random = randomNumberSystem(max);
	
	if(max < random) random = randomNumberSystem(max);
	
	return Number(random);
	
};