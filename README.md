# Description

Nous souhaitons vous facilité la vie sur certaines fonctionnalités !

Optimisé, propre, facile et simple à utiliser !

# Les fonctions

## Fonction `api.blacklist()`
```js
const { blacklist } = require("nazma.js").api;

// le type list est actuellement non fonctionnel

console.log(blacklist("add", password, { // type : list, add, remove and update, password : votre mot de passe

	userID: "", // obligatoire, sauf sur le type list
	
	reason: "", // seulement pour le type : add et update
	
	links: "" // seulement pour le type : add et update

}));
```

## Fonction `antiLinks()`
```js
const { antiLinks } = require("nazma.js");

client.on("message", (message) => {

	antiLinks(message, {
				
		only: true, // activation ( true ou false )
		
		//links: [ "monsite.fr" ], // vos liens en plus de celle par défaut, fonctionnel avec une base de données ( fonction non obligatoire )
		
		user: {
		
			id: message.author.id,
			
			perm: "MANAGE_MESSAGES" // mettez la permission souhaitez 
		
		}, // vérification de la permission indiquer a l'utilisateur indiquer
				
		messageDelete: false // supprimer le message de l'utilisateur ( true ou false )
		
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

## Fonction `textFormat()`
```js
const { textFormat } = require("nazma.js");
	
console.log(textFormat("Un texte d'exemple ?!!"));
```

## Fonction `replace()`
```js
const { replace } = require("nazma.js");
	
console.log(replace("&", "Un texte d'exemple ?!! &lol& :)"));
```

## Fonction `replaceAll()`
```js
const { replaceAll } = require("nazma.js");
	
console.log(replaceAll("&", "Un texte d'exemple ?!! &lol& :)"));
```

## Fonction `replaceMention()`
```js
const { replaceMention } = require("nazma.js");
	
console.log(replaceMention("Un texte d'exemple ?!! @here")); // remplace la mention here et everyone
```

## Fonction `percentageNumber()`
```js
const { percentageNumber } = require("nazma.js");
	
console.log(percentageNumber(20, 50)); // string non obligatoire
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

## Fonction `mentionChannel()`
```js
const { mentionChannel } = require("nazma.js");
	
console.log(mentionChannel(channelId));
```

## Fonction `mentionRole()`
```js
const { mentionRole } = require("nazma.js");
	
console.log(mentionRole(roleId));
```

## Fonction `mentionTextRole()`
```js
const { mentionTextRole } = require("nazma.js");
	
console.log(mentionTextRole(roleId, "Un texte d'example ?!!"));
```

## Fonction `mentionUser()`
```js
const { mentionUser } = require("nazma.js");
	
console.log(mentionUser(userId));
```

## Fonction `mentionTextUser()`
```js
const { mentionTextUser } = require("nazma.js");
	
console.log(mentionTextUser(userId, "Un texte d'example ?!!"));
```

## Fonction `mysql()`
```js
const { mysql } = require("nazma.js");
	
console.log(mysql(host, user, password, database, charset, connexion));
```

# Liens

- [Nazma](https://nazmabot.fr)

- [Nazma Invite](https://nazmabot.fr/invite)

- [Nazma Support](https://nazmabot.fr/support)

- [NazmaJS github](https://github.com/thebigwolfy/nazma.js)
