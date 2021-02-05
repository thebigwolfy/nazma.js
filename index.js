// Expoter les modules

module.exports = {
	
	randomNumber,
	
	test,
	
	formatColor,
	
	version: require("./package.json").version
	
};

module.exports.Embed = class {
	
    constructor() {
		
        this = {
			
            embed: {
				fields: []
			}
			
        };
		
    };

    getJSON() {
		
        return this;
		
    };

    setText(text) {
		
        this.content = text;

        return this;
		
    }

    setAuthor(author, authorImage, authorUrl) {
		
        this.embed.author = {};
		
        this.embed.author.name = author;
		
        this.embed.author.url = authorUrl; 
		
        this.embed.author.icon_url = authorImage;  
         
        return this;
		
    };

    setTitle(title) {
		
        this.embed.title = title;

        return this;
		
    };

    setURL(url) {
		
        this.embed.url = url;

        return this;
		
    };

    setThumbnail(thumbnail) {
		
        this.embed.thumbnail = {};
		
        this.embed.thumbnail.url = thumbnail;

        return this;
		
    };

    setImage(image) {
		
        this.embed.image = {};
		
        this.embed.image.url = image;

        return this;
		
    };

    setTimestamp(date) {
		
        if (date){
			
            this.embed.timestamp = date;
			
        } else this.embed.timestamp = new Date();

        return this;
		
    };

    setColor(color) {
		
        this.embed.color = formatColor(color);

        return this;
		
    };

    setDescription(description) {
		
        this.embed.description = description;

        return this;
		
    };

    addField(fieldName, fieldValue, inline) {
		
        this.embed.fields.push({
            name: fieldName,
            value: fieldValue,
            inline: inline
        });

        return this;
		
    };

    setFooter(footer, footerImage) {
		
        this.embed.footer = {};
		
        this.embed.footer.icon_url = footerImage;
		
        this.embed.footer.text = footer;

        return this;
		
    };
	
};

// Fontion formatColor *sortie d'une couleur*

function formatColor(color) {
	
    // Using Regular Expressions to test the given value and check if it is a valid hex color representation
    if((/^#([0-9A-F]{3}){1,2}$/i).test(color)) {
		
        let rawHex = color.substring(1); // Gets rid of the first character (in this case, it will remove the #)
        return parseInt(rawHex, 16);
		
    } else 
	    return console.log("[NazmaPackage - Err] The given color isn't a valid hexadecimal color representation.")
			
};

// Fontion randomNumber *nombre aléatoire*

function randomNumber(max) {
	
	if(!max) return console.log("[NazmaPackage - Err] Veuillez inclure un nombre maximale pour un random parfait !");
	
	if(!Number(max)) return console.log("[NazmaPackage - Err] Veuillez inclure un nombre !");
	
	if(max < 0 || max === 0) return console.log("[NazmaPackage - Err] Veuillez inclure un nombre !");
		
	return Math.floor(Math.random() * Math.floor(max));

};

// Fontion test *voir si le package répond bien correctment*

function mentionUser(userId) {
	
	return ("<@" + userId + ">");
	
};

// Fontion test *voir si le package répond bien correctment*

function test() {
	
	return "Test effectué !";
	
};
