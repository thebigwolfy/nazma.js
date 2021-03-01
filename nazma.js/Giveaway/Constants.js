// Powered by the discord-giveaways package

const Discord = require('discord.js');

module.exports.GiveawayMessages = {};

module.exports.GiveawayStartOptions = {};

module.exports.defaultGiveawayMessages = {
	
    giveaway: '🎉🎉 **GIVEAWAY** 🎉🎉',
	
    giveawayEnded: '🎉🎉 **GIVEAWAY ENDED** 🎉🎉',
	
    inviteToParticipate: 'React with 🎉 to participate!',
	
    timeRemaining: 'Time remaining: `{duration}`',
	
    winMessage: 'Congratulations, {winners}! You won **{prize}**!\n{messageURL}',
	
    embedFooter: 'Giveaway',
	
    noWinner: 'Giveaway cancelled, no valid participations!',
	
    winners: 'winner(s)',
	
    endedAt: 'End at',
	
    hostedBy: "Hosted by: {user}",
	
    units: {
		
        seconds: "seconds",
		
        minutes: "minutes",
		
        hours: "hours",
		
        days: "days",
		
        pluralS: false
		
    }
	
};

module.exports.GiveawaysManagerOptions = {};

module.exports.defaultManagerOptions = {
	
    storage: './Giveaway/giveaways.json',
	
    updateCountdownEvery: 5000,
	
    endedGiveawaysLifetime: 0,
	
    hasGuildMemberIntent: false,
	
    default: {
		
        botsCanWin: false,
		
        exemptPermissions: [],
		
        exemptMembers: () => false,
		
        embedColor: '#FF0000',
		
        reaction: '🎉'
		
    }
	
};

module.exports.GiveawayRerollOptions = {};

module.exports.defaultRerollOptions = {
	
    winnerCount: null,
	
    messages: {
		
        congrat: '🎉 New winner(s): {winners}! Congratulations!\n{messageURL}',
		
        error: 'No valid participations!'
		
    }
	
};

module.exports.GiveawayEditOptions = {};

module.exports.GiveawayData = {};
