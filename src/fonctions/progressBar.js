"use strict";

// Exportation de la fonction progressBar

module.exports = (options = {}) => {
	
	let size = 0,
		
		line = "",
			
		slider = "";
		
	if(!options.type) options.type = "filled";
	
	if(String(options.type) === "filled") {
		
		size = 40,
		
		line = "□",
			
		slider = "■";
		
	} else if(String(options.type) === "split") {
		
		size = 40,
		
		line = "▬",
			
		slider = "🔘";
		
	}
	
	if(!options.total) throw new Error("NazmaJS - Veuillez inclure la valeur totale de la barre de progression !");
		
	if(!options.value) throw new Error("NazmaJS - Veuillez inclure la valeur de progression !");
	
	if(Number(options.value) > Number(options.total)) return Object({
				
		bar: line.repeat(size + 2),
			
		percentage:  (Number(options.value) / Number(options.total)) * 100
			
	});
		
	const progress = Math.round((size * (Number(options.value) / Number(options.total))));
		
	return Object({
			
		bar: line.repeat(progress).replace(/.$/, slider) + line.repeat(size - progress),
			
		percentage:  (Number(options.value) / Number(options.total)) * 100
			
	});
	
};