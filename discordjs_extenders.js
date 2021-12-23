const { Client, GuildChannelManager } = require("discord.js");

const monthsNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

// Client

Client.prototype.getTime = function(unix_timestamp, month = true, full = 0) {

    if(!unix_timestamp) return undefined;

    const date = new Date(unix_timestamp * 1000);

    if(!date) return undefined;

    const years = date.getFullYear();

    const months = month ? monthsNames[date.getMonth()] : monthsNames[date.getMonth()].toLowerCase();;

    const day = date.getDate();

    const hours = date.getHours();

    const mins = date.getMinutes();

    const secs = date.getSeconds();

    return String(full === 0 ? `${day} ${months} ${years}` : (full === 1 ? `${day} ${months} ${years} à ${hours}:${mins}` : (full >= 3 ? `${day} ${months} ${years}  à ${hours}:${mins}:${secs}` : "")));

};

// GuildChannelManager

GuildChannelManager.prototype.percentage = function(type = "GUILD_TEXT") {

    return (this.type(type) * 100) / this._cache.size;

};

GuildChannelManager.prototype.type =  function(type = "GUILD_TEXT") {

    return this._cache.filter((c) => c.type === type).size;

};