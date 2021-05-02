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
// "`Un texte d'example ?!!`"
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
