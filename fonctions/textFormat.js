"use strict";

// Exportation de la fonction textFormat

module.exports = (text) => {
	
	return String(text ? `\`${text}\`` : "NULL");

};