const { formatColor } = require("./all.js");

module.exports = class {
	
    constructor() {
		
        this.data = {
			
            embed: {
				
				fields: []
				
			}
			
        };
		
    };
	
	JSON() {
		
		return getJSON();
		
	};

    getJSON() {
		
        return this.data;
		
    };

    setText(message) {
		
        this.data.content = message;

        return this;
		
    }

    setAuthor(author, authorImage, authorUrl) {
		
        this.data.embed.author = {
			
			name: author,
			
			url: authorUrl,
			
			icon_url: authorImage
			
		};
         
        return this;
		
    };
	
	setTitl(title) {
		
		return setTitle(title);
		
	};

    setTitle(title) {
		
        this.data.embed.title = title;

        return this;
		
    };

    setURL(url) {
		
        this.data.embed.url = url;

        return this;
		
    };

    setThumbnail(thumbnail) {
		
        this.data.embed.thumbnail = {
			
			url: thumbnail
			
		};

        return this;
		
    };

    setImage(image) {
		
        this.data.embed.image = {
			
			url: image
			
		};

        return this;
		
    };

    setTimestamp(date) {
		
        if (date){
			
            this.data.embed.timestamp = date;
			
        } else this.data.embed.timestamp = new Date();

        return this;
		
    };

    setColor(color) {
		
        this.data.embed.color = formatColor(color);

        return this;
		
    };
	
	setDescriptions(description) {
		
		return setDescription(description);
		
	};

    setDescription(description) {
		
        this.data.embed.description = description;

        return this;
		
    };

    addField(fieldName, fieldValue, inline) {
		
        this.data.embed.fields.push({
			
            name: fieldName,
			
            value: fieldValue,
			
            inline: inline
			
        });

        return this;
		
    };

    setFooter(footerMessage, footerImage) {
		
        this.data.embed.footer = {
			
			icon_url: footerImage,
			
			text: footerMessage
			
		};

        return this;
		
    };
	
};