"use strict";

const { checkNumber } = require("./checkNumber.js");

// Exportation de la fonction reducNumber

module.exports = (options) => {
	
	if(!options.number) options.number = 0;
	
	if(!options.decimal) options.decimal = false;
	
	if(checkNumber(options.number, false) === false) return checkNumber(options.number, true);
	
	if(String(options.number).includes("-")) throw new Error("NazmaJS - Veuillez inclure un nombre positif !", "default");
	
	if(options.number.length > 9) {
		
		if(options.decimal) return String(options.number.slice(0, -10) + "md");
		
		else return String(options.number.slice(0, -9) + "md");
		
	} else if(options.number.length > 6) {
		
		if(options.decimal) return String(options.number.slice(0, -7) + "m");
		
		else return String(options.number.slice(0, -6) + "m");
		
	} else if(options.number.length > 3) {
		
		if(options.decimal) return String(options.number.slice(0, -3) + "." + options.number.slice(0, -4) + "k");
		
		else return String(options.number.slice(0, -3) + "k");
		
	} else return String(options.number);

};