"use strict";

const { checkNumber } = require("./interne.js");

// Exportations des fonctions utile

module.exports = {
	
	textFormat,
	
	percentageNumber,
	
	reducNumber
	
}

// Fonctions utile

function textFormat(text) {
	
	if(!text) throw new Error("NazmaJS - Veuillez indiquer un texte !");
	
	return String("`" + text + "`");
	
}

function percentageNumber(number, numberTotal, fixed = 0) {
	
	if(checkNumber(number) !== undefined) throw new Error(checkNumber(number));
	
	if(number.includes("-")) throw new Error("NazmaJS - Veuillez inclure un nombre entier !");
	
	if(checkNumber(numberTotal) !== undefined) throw new Error(checkNumber(numberTotal));
	
	if(numberTotal.includes("-")) throw new Error("NazmaJS - Veuillez inclure un nombre entier !");
	
	if(fixed && Number(fixed) !== Number("0")) {
		
		if(checkNumber(fixed) !== undefined) throw new Error(checkNumber(fixed));
	
		if(fixed.includes("-") || fixed.includes(".")) throw new Error("NazmaJS - Veuillez inclure un nombre entier !");
		
	}
	
	return String(Number(Number(number) * Number(100) / Number(numberTotal)).toFixed(fixed) + "%");
	
}

function reducNumber(number) {

	if(checkNumber(number) !== undefined) throw new Error(checkNumber(number));
	
	if(number.includes("-")) throw new Error("NazmaJS - Veuillez inclure un nombre entier !");
	
	let result = number;
	
	if(number.length > 6) {
		
		result = String(result.substr(3, 6) + "m");
		
	} else if(number.length > 3) {
		
		result = String(result.substr(0, 3) + "k");
		
	}
	
	return String(result);

}