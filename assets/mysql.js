"use strict";

/*

mysql({
	
	host: "localhost",
	
	user: "me",
	
	password: "0000",
	
	database: "me",
	
	charset: "utf8mb4_bin"
	
});

mysql("localhost", "me", "0000", "me", "utf8mb4_bin");

*/

module.exports.mysql = function (hostSQL_D, user_D, passwordSQLUser_D, database_D, charset_D, error) {
	
	if(error !== undefined) {
		
		if(error.type === "info") {
			
			console.log("NazmaJS - Mysql - " + error.text);
			
		} else throw new Error("NazmaJS - Mysql - " + error.text);
		
	};
	
	if(!hostSQL_D || hostSQL_D === undefined || hostSQL_D === null || !String(hostSQL_D) || !Object(hostSQL_D)) throw new Error("NazmaJS - Mysql - Indicate the data connexion host are the object data connexion!");
	
	let hostSQL = String(hostSQL_D.host !== undefined ? hostSQL_D.host : hostSQL_D), user = String(hostSQL_D.user !== undefined ? hostSQL_D.user : user_D), passwordSQLUser = String(hostSQL_D.password !== undefined ? hostSQL_D.password : passwordSQLUser_D), database = String(hostSQL_D.database !== undefined ? hostSQL_D.database : database_D), charset = String(hostSQL_D.charset !== undefined ? hostSQL_D.charset : charset_D);
	
	if(!user || user === undefined || user === null) throw new Error("NazmaJS - Mysql - Indicate the data connexion user name!");
	
	if(!passwordSQLUser || passwordSQLUser === undefined || passwordSQLUser === null) throw new Error("NazmaJS - Mysql - Indicate the data connexion password user!");
	
	if(!database || database === undefined || database === null) throw new Error("Indicate the data connexion name data base!");
	
	const sql = require("mysql").createConnection({
		
		host: hostSQL,
		
		user: user,
		
		password: passwordSQLUser,
		
		database: database,
		
		charset: (String(charset) === String(undefined) ? "utf8mb4_bin" : charset)
		
	});

	sql.connect((err) => {

		if(err) {
			
			if(err.code === "ERR_INVALID_CALLBACK") throw new Error("NazmaJS - Mysql - Error to connect the MySQL server. The connexion reload not possible!");
			
			if(err.code === "ER_HOST_IS_BLOCKED") throw new Error("NazmaJS - Mysql - The connexion is bloqued to the MySQL server!");
			
			if(err.code === "ECONNREFUSED") throw new Error("NazmaJS - Mysql - The database connection was refused.");
			
			if(err.code !== "PROTOCOL_CONNECTION_LOST") mysql(hostSQL, user, passwordSQLUser, database, charset, {
				
				text: "Impossible to connect to the MySQL server.",
				
				type: "error"
				
			});
			
		} else return console.log("NazmaJS - Mysql - Connected to the MySQL server! Connexion ID: " + sql.threadId);
		
	});
	
	sql.on("error", function (err) {
		
		if((!error || error !== undefined || error !== null) && (err.code === "PROTOCOL_CONNECTION_LOST" && err.code !== "ER_HOST_IS_BLOCKED" && err.code !== "ERR_INVALID_CALLBACK")) {
			
			mysql(hostSQL, user, passwordSQLUser, database, charset, {
				
				text: "NazmaJS - Mysql - Reload to the MySQL server...",
				
				type: "info"
				
			});
			
		} else throw new Error("NazmaJS - Mysql - Error to connect the MySQL server. Error details:\n" + err);
		
	});
	
	return (error !== undefined ? (error !== null ? String("NazmaJS - Mysql - " + error) : Object(sql)) : Object(sql));
	
};