## Description

Un package utile avec plien de fontion pour optimisier votre code !

Le développement de ce package est en cours... la documentation arrive bienôt !

### Fonction `mysql()`

```js
const nazma = require('nazma.js');

nazma.mysql(host, user, password, database, charset); // charset is not required
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
.setText('un message qui n'est pas dans l'embed')
.setTimestamp();

// example de sortie : object embed
// fonctionne seulement en discord.jsV12 *pour le moment*
```

### Fonction `formatColor()`

```js
const nazma = require('nazma.js');

let color = "#ffff121";

nazma.formatColor(color);
```

### Fonction `mentionUser()`

```js
const nazma = require('nazma.js');

let user = message.author;

nazma.mentionUser(user.id);
```

### Fonction `mentionRole()`

```js
const nazma = require('nazma.js');

let role = message.content;

nazma.mentionRole(role.id);
```

### Fonction `mentionChannel()`

```js
const nazma = require('nazma.js');

let channel = message.channel;

nazma.mentionChannel(channel.id);
```

### Fonction `mentionText()`

```js
const nazma = require('nazma.js');

let user = message.author, text = "Hello World!";

nazma.mentionText(user.id, "<user/channel/role>", text);
```

### Fonction `getGuild()`

```js
const nazma = require('nazma.js');

let guild = message.guild; // data guild discord
console.log(nazma.getGuild(guild));

*/ example de sortie : {
	id: "string id" // ect
} /*
```

### Fonction `getChannel()`

```js
const nazma = require('nazma.js');

let channel = message.channel; // data channel discord
console.log(nazma.getChannel(channel));

*/ example de sortie : {
	id: "string id" // ect
} /*
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

nazma.randomNumber(min, max); // min = le nombre minimum | max = le nombre maximum

// example de sortie : "50"
```

### Fonction `randomNumberMax()`

```js
const nazma = require('nazma.js');

nazma.randomNumberMax(max); // max = le nombre maximum

// example de sortie : "550"
```

### Fonction `randomNumberFloor()`

```js
const nazma = require('nazma.js');

nazma.randomNumberFloor();

// example de sortie : "154802"
```

## Liens

[Namza WebSite](https://nazmabot.fr) - [Discord Support](https://discord.gg/VMkYEEFph9)