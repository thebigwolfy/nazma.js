## Description

Un package utile avec plien de fontion pour optimisier votre code !

Le développement de ce package est en cours... la documentation arrive bienôt !

## Informations

Le package détecte à partir de la 'V0.0.17', sa version, il peut donc vous indiquez s'il faut le mettre à jour !

### Fonction `embed()`

```js
const nazma = require('nazma.js');

const embed = new nazma.Embed();

.setTitle('Un titre')
.setAuthor('Author here', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
.setURL('https://www.google.com')
.addField('field', 'this is inline', true)
.addField('field', 'this is not inline')
.setColor('color')
.setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
.setDescription('description :)')
.setImage('https://cdn.discordapp.com/embed/avatars/0.png')
.setFooter('footer')
.setText('un message qui n'est pas dans l'embed mais hors d l'embed ( si vous avez pas compris, faite un teste ) !')
.setTimestamp();

// example de sortie : object embed
// fonctionne seulement en discord.jsV12 *pour le moment*
```

### Fonction `formatColor()`

```js
const nazma = require('nazma.js');

nazma.formatColor(color); // color = le nom de la couleur avec un #

// sortie en nombre
```

### Fonction `mentionUser()`

```js
const nazma = require('nazma.js');

let user = message.author;
nazma.mentionUser(user.id);

// example de sortie : "<@000000000000000>" // les 0 corresponds a un id

```

### Fonction `mentionRole()`

```js
const nazma = require('nazma.js');

let role = message.content; // id d'un role discord
nazma.mentionRole(role.id);

// example de sortie : "<@&000000000000000>" // les 0 corresponds à un id

```

### Fonction `mentionChannel()`

```js
const nazma = require('nazma.js');

let channel = message.channel;
nazma.mentionChannel(channel.id);

// example de sortie : "<#000000000000000>" // les 0 corresponds à un id

```

### Fonction `getUser()`

```js
const nazma = require('nazma.js');

let user = message.author; // data user discord
console.log(nazma.getUser(user));

*/ example de sortie : {
	id: "string id" // ect
} /*

```

### Fonction `randomNumber()`

```js
const nazma = require('nazma.js');

nazma.randomNumber(max); // max = le nombre maximum pour un aléatoire parfait

// example de sortie : "50"
```

## Ajout

Ajout de la fonction 'getAllUsers()', actuellement en bêta !

## Liens

[Namza WebSite](https://nazmabot.fr/) [Discord Support](https://discord.gg/VMkYEEFph9)