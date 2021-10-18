"use strict";

const { createPool } = require("mysql2");

// Exportation de la fonction SQL

module.exports = (options) => {

	options = check(options);

	const sql = createPool({
			
		host: options.host,
		
		user: options.user,
		
		password : options.password,
		
		database : options.database,
		
		charset: options.charset ? options.charset : "utf8mb4_bin",
		
		multipleStatements: options.multipleStatements ? options.multipleStatements : true,
		
		connectionLimit: options.connectionLimit ? options.connectionLimit : 10
		
	});
	
	const codeError = [
	
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
		
			const code = codeError.filter((b) => b.code === err.code)[0];
		
			if(code) {
				
				if(code.reload === true) return mysql(options);
				
				throw new Error(code.errorText);
				
			} else throw new Error(err);
			
			
		} else {
			
			connection.release();
			
			return console.log(`NazmaJS - Mysql - La connexion est correctement établie ${options.idView ? "( id : ${connection.threadId} ) " : ""}!`);
		
		}
		
	});
	
	return Object(sql);
		
};

function check(options) {

	if(!options) options = {};

	if(!options.host || typeof Number(options.host) !== "number") throw new Error("NazmaJS - Veuillez indiquer une IP du serveur SQL !");

	if(!options.user) throw new Error("NazmaJS - Veuillez indiquer le nom de l'utilisateur pour accédez au serveur SQL !");

	if(!options.password) throw new Error("NazmaJS - Veuillez indiquer le mot de passe de l'utilisateur pour accédez au serveur SQL !");

	if(!options.password) throw new Error("NazmaJS - Veuillez indiquer le mot de passe de l'utilisateur pour accédez au serveur SQL !");

	if(!options.database) throw new Error("NazmaJS - Veuillez indiquer le nom du serveur SQL !");

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

	return options;

};
