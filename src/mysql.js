"use strict";

const { createConnection } = require("mysql");

// Exportation de la fonction SQL

module.exports = function (host, user, password, database, charset = "utf8mb4_bin") {
	
	if(!host || typeof host !== "string") throw new Error("NazmaJS - Veuillez indiquer une IP du serveur SQL !");
	
	if(!user || typeof user !== "string") throw new Error("NazmaJS - Veuillez indiquer le nom de l'utilisateur d'accès !");
	
	if(!password || typeof password !== "string") throw new Error("NazmaJS - Veuillez indiquer le mot de passe de l'utilisateur d'accès !");
	
	if(!database || typeof database !== "string") throw new Error("NazmaJS - Veuillez indiquer le nom du serveur SQL !");
	
	const sql = createConnection({
			
		host: host,
		
		user: user,
		
		password: passwordSQLUser,
		
		database: database,
		
		charset: charset
		
	});

	sql.connect((err) => {

		if(err) {
			
			if(err.code === "ERR_INVALID_CALLBACK") console.log("NazmaJS - Mysql - La connexion n'a pas pu être établie !");
			
			if(err.code === "ER_HOST_IS_BLOCKED") console.log("NazmaJS - Mysql - Le serveur vous a bloquer !");
			
			if(err.code === "ECONNREFUSED") console.log("NazmaJS - Mysql - La connexion est refuser.");
			
			if(err.code !== "PROTOCOL_CONNECTION_LOST") {
				
				console.log("NazmaJS - Mysql - La connexion du serveur SQL s'est arrêter !");
				
				mysql(hostSQL, user, passwordSQLUser, database, charset);
				
			}
			
		} else return console.log("NazmaJS - Mysql - La connexion est correctement établie ! Connexion ID : " + sql.threadId);
		
	});
	
	sql.on("error", function (err) {
		
		if((!error || error !== undefined || error !== null) && (err.code === "PROTOCOL_CONNECTION_LOST" && err.code !== "ER_HOST_IS_BLOCKED" && err.code !== "ERR_INVALID_CALLBACK")) {
				
			console.log("NazmaJS - Mysql - Redémarrage de la connexion au serveur...");
			
			mysql(hostSQL, user, passwordSQLUser, database, charset);
			
			data++;
			
		} else {
			
			console.log("NazmaJS - Mysql - Une erreur est suvenue !\n");
			
			console.log(err);
			
		}
		
	});
	
	return Object(sql);
		
}