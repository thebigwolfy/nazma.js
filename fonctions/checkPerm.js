"use strict";

const { FLAGS } = require("discord.js").Permissions;

// Exportation de la fonction checkPerm

module.exports = (options) => {
	
	if(!options.guild || typeof options.guild !== "object") throw new Error("Veuillez inclure un serveur Discord ( object ) !");
	
	if(!options.userId || typeof options.userId !== "number") throw new Error("Veuillez inclure l'identifiant d'un l'utilisateur !");
	
	if(!options.perm || typeof options.perm !== "string") throw new Error("Veuillez inclure une permission a vérifier à un utilisateur !");
	
	if(!FLAGS[`${options.perm}`]) throw new Error("Veuillez inclure une permission existante sur Discord !");
	
	if(!options.guild.members.cache.get(options.userId)) return false;
	
	if(options.guild.members.cache.get(options.userId).permissions.has(FLAGS[`${options.perm}`])) return true;
	
	else return false;

};