"use strict";

// Exportation de la fonction timeFormat

module.exports = (time) => {

    if(!time) throw new Error("NazmaJS - Veuillez indiquer un temps ( en secondes ) !");
		
	return String(time < 60 ? (Number(time).toFixed(0) + "s") :
	
		time < 3600 ? (Number(time / 60).toFixed(0) + "min") :
		
		time < 3600 * 399 ? (Number(time / 3600).toFixed(0) + "h") :
		
		(Number(time / 3600 * 24).toFixed(0) + "j"));

}