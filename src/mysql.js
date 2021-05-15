"use strict";

const { createConnection } = require("mysql");

let data = 0;

// Exportation de la fonction SQL

module.exports.sql = mysql;

function mysql(host, user, password, database, charset = "utf8mb4_bin") {
	
	if(!host || typeof Number(host) !== "number") return console.log("NazmaJS - Veuillez indiquer une IP du serveur SQL !");
	
	if(!user) return console.log("NazmaJS - Veuillez indiquer le nom de l'utilisateur d'accès !");
	
	if(!password) return console.log("NazmaJS - Veuillez indiquer le mot de passe de l'utilisateur d'accès !");
	
	if(!database) return console.log("NazmaJS - Veuillez indiquer le nom du serveur SQL !");
	
	if(Number(data) > Number(10)) return console.log("NazmaJS - Vous avez dépasser la limite de tentative de connexion avec le package !");
	
	const sql = createConnection({
			
		host: host,
		
		user: user,
		
		password: password,
		
		database: database,
		
		charset: charset
		
	});

	sql.connect((err) => {

		if(err) {
			
			if(err.code === "ERR_INVALID_CALLBACK") return console.log("NazmaJS - Mysql - La connexion n'a pas pu être établie !");
			
			if(err.code === "ER_HOST_IS_BLOCKED") return console.log("NazmaJS - Mysql - Le serveur vous a bloquer !");
			
			if(err.code === "ECONNREFUSED") return console.log("NazmaJS - Mysql - La connexion est refuser.");
			
			if(err.code !== "PROTOCOL_CONNECTION_LOST") {
				
				mysql(host, user, password, database, charset);
				
				return console.log("NazmaJS - Mysql - La connexion du serveur SQL s'est arrêter ! Il a redémarre !");
				
			}
			
		} else {
			
			data = 0;

			return console.log(`NazmaJS - Mysql - La connexion est correctement établie ! Connexion ID : ${sql.threadId}`);
			
		}
		
	});
	
	sql.on("error", function (err) {
		
		if(err) {
			
			if(err.code !== "ERR_INVALID_CALLBACK" && err.code !== "PROTOCOL_CONNECTION_LOST") {
				
				console.log("NazmaJS - Mysql - Une erreur est suvenue !\n");
			
				return console.log(err);
				
			}
			
		} else {
			
			console.log("NazmaJS - Mysql - Redémarrage de la connexion au serveur...");
			
			data++;
				
			return mysql(host, user, password, database, charset);
			
		}
		
	});
	
	return Object(sql);
		
}