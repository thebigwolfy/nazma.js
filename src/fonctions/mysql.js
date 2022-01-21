"use strict";

const mysql = require("mysql2");

// Exportation de la fonction SQL

module.exports = (options) => {

	options = check(options);

	function connexion(options) {
	
		const sql = mysql.createPool({
				
			host: options.host,
			
			user: options.user,
			
			password: options.password,
			
			database: options.database,
			
			charset: options.charset ? options.charset : "utf8mb4_bin",
			
			multipleStatements: options.multipleStatements,
			
			connectionLimit: options.connectionLimit
			
		});
	
		sql.getConnection((err, connection) => {
	
			if(err) {
	
				setTimeout(connexion(options), 10000);
	
				return console.error("Mysql - Une erreur s'est produite, relance du programme en cours...");
	
			} else {
	
				connection.release();
				
				return console.log(`Mysql - La connexion est correctement établie ${options.idView ? ("( ID : " + connection.threadId + " ) ") : ""}!`);
	
			};
	
		});
	
		sql.on("error", (err) => {
			
			if(err.code === "ER_HOST_IS_BLOCKED") {
	
				return console.error("Mysql - La base de donnée a actuellement bloquer l'accès, veuillez contacter l'opérateur du serveur ( ou de votre hébergeur ).");
	
			} else if(err.code === "PROTOCOL_CONNECTION_LOST") {
	
				setTimeout(connexion(options), 10000);
	
				return console.error("Mysql - La connexion s'est perdu, relance du programme en cours...");
	
			} else return console.error(err);
	
		});
	
		return sql;
	
	};
	
	return connexion(options);
		
};

function check(options = {}) {
	
	if(!options.host || typeof Number(options.host) !== "number") return console.error("Mysql - Veuillez indiquer une IP du serveur SQL !");

	if(!options.user) return console.error("Mysql - Veuillez indiquer le nom de l'utilisateur pour accédez au serveur SQL !");

	if(!options.password) return console.error("Mysql - Veuillez indiquer le mot de passe de l'utilisateur pour accédez au serveur SQL !");

	if(!options.database) return console.error("Mysql - Veuillez indiquer le nom du serveur SQL !");

	if(!options.idView || (options.idView !== true || options.idView !== false)) options.idView = false;

	if(!options.multipleStatements || (options.multipleStatements !== true || options.multipleStatements !== false)) options.multipleStatements = false;

	if(!options.connectionLimit || typeof options.connectionLimit !== "number" || options.connectionLimit <= 0 || options.connectionLimit > 100) options.connectionLimit = 10;

	/*
		options = {
			host: "",
			user: "",
			password: "",
			database: "",
			idView: true,
			charset: "utf8mb4_bin",
			multipleStatements: true,
			connectionLimit: 10
		}
	*/

	return Object(options);

};