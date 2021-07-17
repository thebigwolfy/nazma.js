# Description

Nous souhaitons vous facilité la vie sur certaines fonctionnalités !

Optimisé, propre, facile et simple a utiliser !

Si vous avez des suggestion redirigez vous vers le github ou le support du bot ( Nazma ) !

# Les fonctions

## Fonction `api.blacklist()`
```js
const { api } = require("nazma.js");

const options = {

	password: "", // obligatoire

	userID: "", // obligatoire
	
	reason: "", // seulement pour le add et update
	
	links: "" // seulement pour le add et update

};

const type = "add"; // add, remove and update
	
console.log(api.blacklist(type, options));
```

## Fonction `antiLinks()`
```js
const { antiLinks } = require("nazma.js");

client.on("message", (message) => {

	antiLinks(client, message, {
				
		only: true, // système on ( true ) : off ( false )
		
		links: [ "monsite.fr" ],
		
		//permsUser: message.guild.members.cache.get(message.author.id).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES),
				
		permsBot: message.guild.members.cache.get(client.user.id).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)
		
	}).then((insultes) => {
	
		if(insultes) "La personne a mit un lien.";
		
		else "La personne a pas mit de lien.";
	
	}).catch((err) => {
	
		console.log(err);
	
	});
	
});
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
	
console.log(percentageNumber(20, 50));
```

## Fonction `reducNumber()`
```js
const { reducNumber } = require("nazma.js");
	
console.log(reducNumber(2000));
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
