"use strict";

// Exportation de la fonction avatarURL

module.exports = (userId, avatar, typeFile = "png", size = "4096") => {

    if(!userId || !avatar) return undefined;

	return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${typeFile}?size=${size}`;

};