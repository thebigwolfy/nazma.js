"use strict";

// Exportations des fonctions utile

module.exports = {
	
	error,
	
	checkNumber
	
}

// Fonctions utile

function error(data, type = "default") {
	
	if(type = "default") {

		console.log(new Error(data));
		
		return Object({
		
			error: data
		
		});
		
	} else if(type === "mysql") {
		
		data = Object(data);
		
		console.log(new Error("NazmaJS - Mysql - Erreur :\nMessage SQL : " + data.sqlMessage + "\n\nCode SQL de tentative : " + data.sql));
		
		return Object({
			
			sql: data.sql,
		
			error: data.sqlMessage
		
		});
	
	} else return undefined;

}

function checkNumber(number, data = false) {

	if(!number && data === true) return error("NazmaJS - Veuillez inclure un nombre !", "default");
	
	if(typeof Number(number) !== "number") return false;
	
	else return true;
	
	
}