# Description

Nous souhaitons vous facilité la vie sur certaines fonctionnalités !
Optimisé, propre, facile et simple a utiliser !
Si vous avez des suggestion redirigez vous vers le github !

# Fonctions

## Fonction `textFormat()`
```js
	const { textFormat } = require("nazma.js");
	
	console.log(textFormat("Un texte d'example ?!!"));
```

// Sortie
// "Un texte d'example ?!!"
// type : "string"

## Fonction `replace()`
```js
	const { replace } = require("nazma.js");
	
	console.log(replace("&", "Un texte d'example ?!! &lol& :)"));
```

// Sortie
// "Un texte d'example ?!! lol& :)"
// type : "string"

## Fonction `replaceAll()`
```js
	const { replaceAll } = require("nazma.js");
	
	console.log(replaceAll("&", "Un texte d'example ?!! &lol& :)"));
```

// Sortie
// "Un texte d'example ?!! lol :)"
// type : "string"

## Fonction `replaceMention()`
```js
	const { replaceMention } = require("nazma.js");
	
	console.log(replaceMention("Un texte d'example ?!! @here"));
```

// Sortie
// "Un texte d'example ?!! here"
// type : "string"

## Fonction `percentageNumber()`
```js
	const { percentageNumber } = require("nazma.js");
	
	console.log(percentageNumber(20, 50));
```

// Sortie
// "40%"
// type : "string"

## Fonction `reducNumber()`
```js
	const { reducNumber } = require("nazma.js");
	
	console.log(reducNumber(2000));
```

// Sortie
// "2k"
// type : "string"

## Fonction `mentionChannel()`
```js
	const { mentionChannel } = require("nazma.js");
	
	console.log(mentionChannel(channelId));
```

// Sortie
// "<#00000000>"
// type : "string"

## Fonction `mentionRole()`
```js
	const { mentionRole } = require("nazma.js");
	
	console.log(mentionRole(roleId));
```

// Sortie
// "<@&00000000>"
// type : "string"

## Fonction `mentionUser()`
```js
	const { mentionUser } = require("nazma.js");
	
	console.log(mentionUser(userId));
```

// Sortie
// "<@00000000>"
// type : "string"

## Fonction `mentionTextUser()`
```js
	const { mentionTextUser } = require("nazma.js");
	
	console.log(mentionTextUser(userId, "Un texte d'example ?!!"));
```

// Sortie
// "<@00000000>, Un texte d'example ?!!"
// type : "string"

## Fonction `mysql()`
```js
	const { mysql } = require("nazma.js");
	
	console.log(mysql(host, user, password, database, charset));
```

// Sortie
// { Object(sql) }
// type : "object"

// charset n'est pas obligatoire

# Liens

[Nazma](https://nazmabot.fr)
[Nazma Invite](https://nazmabot.fr/invite)
[Nazma Support](https://nazmabot.fr/support)
[NazmaJS github](https://github.com/thebigwolfy/nazma.js)
