"use strict";

const { error, checkNumber } = require("./interne.js");

// Exportations des fonctions utile

module.exports = {
	
	textFormat,
	
	timeFormat,
	
	replace,
	
	replaceAll,
	
	replaceMention,
	
	percentageNumber,
	
	reducNumber
	
}

// Fonctions utile

function textFormat(text) {
	
	return String("`" + text + "`");
	
}

function timeFormat(time) {
	
	if(!time) return error("NazmaJS - Veuillez indiquer un temps ( en secondes ) !", "default");
		
	return String(time < 60 ? (Number(time).toFixed(0) + "s") :
	
		time < 3600 ? (Number(time / 60).toFixed(0) + "min") :
		
		time < 3600 * 399 ? (Number(time / 3600).toFixed(0) + "h") :
		
		(Number(time / 3600 * 24).toFixed(0) + "j"));
		
}

function replace(textReplace, text) {
	
	if(textReplace && text) text = text.replace(String(textReplace), "");
	
	return String(text);
	
}

function replaceAll(textReplace, text) {
	
	if(textReplace && text) text = text.replace(/${textReplace}/gi, "");
	
	return String(text);
	
}

function replaceMention(text) {

	if(text) text = text.replace(/@everyone/gi, "everyone").replace(/@here/gi, "here");
	
	return String(text);
	
}

function percentageNumber(number, numberTotal, fixed = 0) {
	
	if(checkNumber(number, false) === false) return checkNumber(number, true);
	
	if(String(number).includes("-")) return error("NazmaJS - Veuillez inclure un nombre positif !", "default");
	
	if(checkNumber(numberTotal, false) === false) return checkNumber(numberTotal, true);
	
	if(String(numberTotal).includes("-")) return error("NazmaJS - Veuillez inclure un nombre positif !", "default");
	
	if(fixed && Number(fixed) !== Number("0")) {
		
		if(checkNumber(fixed, false) === false) return checkNumber(fixed, true);
	
		if(String(fixed).includes("-") || String(fixed).includes(".")) return error("NazmaJS - Veuillez inclure un nombre positif !", "default");
		
	}
	
	return String(Number(Number(number) * Number(100) / Number(numberTotal)).toFixed(fixed) + "%");
	
}

function reducNumber(number) {
	
	if(checkNumber(number, false) === false) return checkNumber(number, true);
	
	if(String(number).includes("-")) return error("NazmaJS - Veuillez inclure un nombre positif !", "default");
	
	let extra = 0;
	
	if(number.length > 9) {
		
		extra = -9;
		
		return String(number.slice(0, extra) + "md");
		
	} else if(number.length > 6) {
		
		extra = -6;
		
		return String(number.slice(0, extra) + "m");
		
	} else if(number.length > 3) {
		
		extra = -3;
		
		return String(number.slice(0, extra) + "k");
		
	} else return String(number);

}