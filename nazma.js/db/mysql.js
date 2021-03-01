module.exports = {
	
	mysql
	
};

function mysql(hostSQL, user, passwordSQLUser, database, charset) {
	
	if(!hostSQL) throw new TypeError("NazmaJS - Mysql - Indicate the data connexion host!");
	
	if(!user) throw new TypeError("NazmaJS - Mysql - Indicate the data connexion user name!");
	
	if(!passwordSQLUser) throw new TypeError("NazmaJS - Mysql - Indicate the data connexion password user!");
	
	if(!database) throw new TypeError("NazmaJS - Mysql - Indicate the data connexion name data base!");
	
	const MySQLjs = require("mysql"), charsetData = (charset !== undefined ? charset : "utf8mb4_bin");
	
	let sql = MySQLjs.createConnection({
		
		host: hostSQL,
		
		user: user,
		
		password: passwordSQLUser,
		
		database: database,
		
		charset : charsetData
		
	});

	sql.connect((err) => {

		if(err) {
			
			setTimeout(mysql(hostSQL, user, passwordSQLUser, database, charset), 10000);
			
			if(err.code === "ER_HOST_IS_BLOCKED") throw new TypeError("NazmaJS - Mysql - The connexion is bloqued to the MySQL server!");
			
			throw new TypeError("NazmaJS - Mysql - Impossible to connect to the MySQL server. Code: " + err.code);
			
		} else return console.log("NazmaJS - Mysql - Connected to the MySQL server! Connexion ID: " + sql.threadId);
		
	});
	
	sql.on("error", function (err) {
		
        if(err.code === "PROTOCOL_CONNECTION_LOST" && err.code !== "ER_HOST_IS_BLOCKED") {
			
            setTimeout(mysql(hostSQL, user, passwordSQLUser, database, charset), 2000);
			
			throw new TypeError("NazmaJS - Mysql - Reload to the MySQL server...");
			
        } else throw new TypeError("NazmaJS - Mysql - Error to the MySQL server. Error code:\n" + err);
		
	});
	
	return sql;

};