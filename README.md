# Description

Un package utile avec plien de fontion pour optimisier votre code !

Le développement de ce package est en cours... la documentation arrive bienôt !

## Installation

```js
npm install --save nazma.js
```

Pour que le bot fonctionne bien, installer également le module de discord ( `npm install --save discord.js` ) !

### Fonction `test()`

```js
const nazma = require('nazma.js');

nazma.test();

// sortie : "Test effectué !"
```

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

### Fonction `randomNumber()`

```js
const nazma = require('nazma.js');

nazma.randomNumber(max); // max = le nombre maximum pour un aléatoire parfait

// example de sortie : "50"
```

## Liens

[Namza WebSite](https://nazmabot.fr/)