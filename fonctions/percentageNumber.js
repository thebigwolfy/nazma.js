"use strict";

const { checkNumber } = require("./checkNumber.js");

// Exportation de la fonction percentageNumber

module.exports = (number, numberTotal, fixed = 0) => {

    if(checkNumber(number, false) === false) return checkNumber(number, true);
	
	if(String(number).includes("-")) throw new Error("NazmaJS - Veuillez inclure un nombre positif !");
	
	if(checkNumber(numberTotal, false) === false) return checkNumber(numberTotal, true);
	
	if(String(numberTotal).includes("-")) throw new Error("NazmaJS - Veuillez inclure un nombre positif !");
	
	if(fixed && Number(fixed) !== Number("0")) {
		
		if(checkNumber(fixed, false) === false) return checkNumber(fixed, true);
	
		if(String(fixed).includes("-") || String(fixed).includes(".")) throw new Error("NazmaJS - Veuillez inclure un nombre positif !");
		
	}
	
	return String(`${Number(Number(number) * Number(100) / Number(numberTotal)).toFixed(fixed)}%`);

}