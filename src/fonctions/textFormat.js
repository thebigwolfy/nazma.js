"use strict";

// Exportation de la fonction textFormat

module.exports = (text) => {
	
	if(!text || typeof text !== "string") throw new Error("Veuillez inclure un texte dans cette fonction !");
	
	return String(`\`${text}\``);

};