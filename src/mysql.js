"use strict";

const { error } = require("./interne.js");

const { createPool } = require("mysql2");

// Exportation de la fonction SQL

module.exports = mysql;

// Fonction MySQL ( connexion )

function mysql(host, user, password, database, charset = "utf8mb4_bin", connectionAll = 10) {
	
	if(!host || typeof Number(host) !== "number") return error("NazmaJS - Veuillez indiquer une IP du serveur SQL !", "default");
	
	if(!user) return error("NazmaJS - Veuillez indiquer le nom de l'utilisateur d'accès !", "default");
	
	if(!password) return error("NazmaJS - Veuillez indiquer le mot de passe de l'utilisateur d'accès !", "default");
	
	if(!database) return error("NazmaJS - Veuillez indiquer le nom du serveur SQL !", "default");

	const sql = createPool({
			
		host: host,
		
		user: user,
		
		password: password,
		
		database: database,
		
		charset: charset,
		
		multipleStatements: true,
		
		connectionLimit: connectionAll
		
	});
	
	let codeError = [
	
		{
			
			code: "PROTOCOL_CONNECTION_LOST",
			
			errorText: "NazmaJS - Le serveur SQL doit recharger !",
			
			error: false,
			
			reload: true
			
		},
		
		{
			
			code: "ER_HOST_IS_BLOCKED",
			
			errorText: "NazmaJS - Le serveur SQL a bloquer les connexions !",
			
			error: true,
			
			reload: false
			
		}
	
	];

	sql.getConnection((err, connection) => {

        if(err) {
		
			let code = codeError.filter((b) => b.code === err.code)[0];
		
			if(code) {
				
				if(code.reload === true) return mysql(host, user, password, database, charset, connectionAll);
				
				return error(String(code.error === true ? code.errorText : String(err.message ? err.message : err.code)), "mysql");
				
			} else return error(String(err.message ? err.message : err.code), "mysql");
			
			
		} else {
			
			connection.release();
			
			return console.log(`NazmaJS - Mysql - La connexion est correctement établie ( id : ${connection.threadId} ) !`);
		
		}
		
	});
	
	return Object(sql);
		
}