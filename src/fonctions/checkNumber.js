"use strict";

// Exportation de la fonction checkNumber( interne )

module.exports = (number, data = false) => {

	if(!number && data === true) throw new Error("NazmaJS - Veuillez inclure un nombre !");
	
	if(typeof Number(number) !== "number") return false;
	
	else return true;
	
}