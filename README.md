# Description

Nous souhaitons vous facilité la vie sur certaines fonctionnalités !

Optimisé, propre, facile et simple à utiliser !

Nous vous conseillons la version 13 de discord.js ( la documentation est faîte avec cette version ) !

# Les fonctions

## Fonction `checkBot()`
```js
const { checkBot } = require("nazma.js");

client.on("messageCreate", (message) => {

	checkBot(message).then((checkBot) => { // permissions vérifier : "SEND_MESSAGES" et "EMBED_LINKS"
	
		if(checkBot) "Posséde les permissions / bot ingoré.";
		
		else "Ne posséde pas les permissions.";
	
	}).catch((err) => {
	
		console.error(err); // erreur
	
	});

	// cette fonction vérifie si un bot met un message, il l'ignore
	
});
```

## Fonction `antiLinks()`
```js
const { antiLinks } = require("nazma.js");

client.on("messageCreate", (message) => {

	antiLinks(message, {
				
		only: true, // activation ( true ou false )
		
		//links: [ "monsite.fr" ], // vos liens en plus de celle par défaut, fonctionnel avec une base de données, non obligatoire
		
		user: {
		
			id: message.author.id,
			
			perm: "MANAGE_MESSAGES" // mettez la permission souhaitez 
		
		}, // vérification de la permission indiquer a l'utilisateur indiquer
				
		//messageDelete: false // supprimer le message de l'utilisateur ( true ou false ), par défaut c'est false
		
	}).then((insultes) => {
	
		if(insultes) "La personne a mit un lien.";
		
		else "La personne a pas mit de lien.";
	
	}).catch((err) => {
	
		console.error(err); // erreur
	
	});
	
});
```

## Fonction `progressBar()`
```js
const { progressBar } = require("nazma.js");

console.log(progressBar({

	type: "split", // split ou filled
	
	total: 20, // nombre totale de la barre de progression
	
	value: 10 // nombre de la progression ( exemple : 10xp )
	
}));
```

## Fonction `timeFormat()`
```js
const { timeFormat } = require("nazma.js");
	
console.log(timeFormat("30")); // le temps doit être en seconde
```

## Fonction `percentageNumber()`
```js
const { percentageNumber } = require("nazma.js");
	
console.log(percentageNumber(20, 50)); // string non obligatoire
```

## Fonction `textFormat()`
```js
const { textFormat } = require("nazma.js");
	
console.log(textFormat("Un texte d'exemple ?!!"));
```

## Fonction `reducNumber()`
```js
const { reducNumber } = require("nazma.js");
	
console.log(reducNumber({

	number: 2000, // string non obligatoire

	decimal: false // permet d'avoir une sortie en nombre décimale ( comme : entrer 2101, sortie 2.1k )

}));
```

## Fonction `checkPerm()`
```js
const { checkPerm } = require("nazma.js");
	
console.log(checkPerm({
			
	guild: message.guild, // l'object d'un serveur
			
	userId: message.author.id, // l'id de l'utilisateur
			
	perm: "MANAGE_MESSAGES" // la permission que la fonction doit vérifier

})); // sortie : true ( possède la permission ) / false ( ne possède pas la permission )
```

## Fonction `mysql()`
```js
const { mysql } = require("nazma.js");
	
const db = mysql(options); // doit être obligatoirement un type "object"

/*

exemple du options :

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

db.query(...);
```

# Liens

- Nazma n'est plus fonctionnel, retrouvez moi en live sur [Twitch](https://www.twitch.tv/thebigwolfy_)

- [NazmaJS github](https://www.github.com/thebigwolfy/nazma.js)
