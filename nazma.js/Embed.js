module.exports = class {
	
    constructor() {
		
        this.data = {
			
            embed: {
				fields: []
			}
			
        };
		
    };

    getJSON() {
		
        return this.data;
		
    };

    setText(textMessage) {
		
        this.data.content = textMessage;

        return this;
		
    }

    setAuthor(author, authorImage, authorUrl) {
		
        this.data.embed.author = {};
		
        this.data.embed.author.name = author;
		
        this.data.embed.author.url = authorUrl; 
		
        this.data.embed.author.icon_url = authorImage;  
         
        return this;
		
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
		
        this.data.embed.thumbnail = {};
		
        this.data.embed.thumbnail.url = thumbnail;

        return this;
		
    };

    setImage(image) {
		
        this.data.embed.image = {};
		
        this.data.embed.image.url = image;

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
		
        this.data.embed.footer = {};
		
        this.data.embed.footer.icon_url = footerImage;
		
        this.data.embed.footer.text = footerMessage;

        return this;
		
    };
	
};