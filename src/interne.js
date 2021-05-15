"use strict";

// Exportations des fonctions utile

module.exports = {
	
	checkNumber
	
}

// Fonctions utile

function checkNumber(number) {

	if(!number) return String("NazmaJS - Veuillez inclure un nombre !");
	
	if(typeof Number(number) !== "number") return String("NazmaJS - Veuillez inclure un nombre valide !");
	
	return undefined;
	
}