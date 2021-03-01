module.exports = {

	formatColor,
	
	randomNumber,
	
	randomNumberMax,
	
	randomNumberFloor,
	
	numberAdd,
	
	numberRemove,
	
	numberMultiply,
	
	numberDivide

};

function numberAdd(one, two) {
	
	if(!one) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(!two) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(!Number(one) && !Number(two)) throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(!Number(one)) throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(!Number(two)) throw new Error("NazmaJS - Please indicate a valid second number!");
	
	let result = Number(Number(one) + Number(two));
	
	return Number(result);
	
};

function numberRemove(one, two) {
	
	if(!one) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(!two) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(!Number(one) && !Number(two)) throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(!Number(one)) throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(!Number(two)) throw new Error("NazmaJS - Please indicate a valid second number!");
	
	let result = Number(Number(one) - Number(two));
	
	return Number(result);
	
};

function numberMultiply(one, two) {
	
	if(!one) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(!two) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(!Number(one) && !Number(two)) throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(!Number(one)) throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(!Number(two)) throw new Error("NazmaJS - Please indicate a valid second number!");
	
	let result = Number(Number(one) * Number(two));
	
	return Number(result);
	
};

function numberDivide(one, two) {
	
	if(!one) throw new Error("NazmaJS - Please indicate a first number!");
	
	if(!two) throw new Error("NazmaJS - Please indicate a second number!");
	
	if(!Number(one) && !Number(two)) throw new Error("NazmaJS - Please indicate a valid first and second number!");
	
	if(!Number(one)) throw new Error("NazmaJS - Please indicate a valid first number!");
	
	if(!Number(two)) throw new Error("NazmaJS - Please indicate a valid second number!");
	
	let result = Number(Number(one) / Number(two));
	
	return Number(result);
	
};

function numberPercentage(data, total) {
	
	if(!data) throw new Error("NazmaJS - Please indicate a number data!");
	
	if(!total) throw new Error("NazmaJS - Please indicate a total number data!");
	
	if(!Number(one) && !Number(two)) throw new Error("NazmaJS - Please indicate a valid number data and total!");
	
	if(!Number(one)) throw new Error("NazmaJS - Please indicate a valid number data!");
	
	if(!Number(two)) throw new Error("NazmaJS - Please indicate a valid number total!");
	
	if(Number(data) > Number(total)) throw new Error("NazmaJS - Please indicate a total number that is not equal to or less than the number of data!");
	
	return String(Number(Number(one) * Number(100) / Number(total)) + "%");
	
};

function formatColor(color) {
	
	let colors = color;
	
	if((/^#([0-9A-F]{3}){1,2}$/i).test(colors)) {
		
		colors = parseInt(colors.substring(1), 16);
		
	} else throw new Error("NazmaJS - The given color isn't a valid hexadecimal color representation.");
		
	return Number(colors);
	
};

function randomNumberFloor() {
	
	return Number(Math.random());
	
};

function randomNumber(min, max) {
	
	if(!min || !Number(min)) throw new Error("NazmaJS - Please include an id min of a number!");
	
	if(!max || !Number(max) || max < 0 || max === 0) throw new Error("NazmaJS - Please include an id max of a number!");
	
	if(Number(min) > Number(max)) throw new Error("NazmaJS - Please include an id min of a number not egal max number!");
	
	if(Number(min) !== Number(max)) return Number(max);
		
	return Number(Math.floor(Number(min) * Math.floor(Number(max))));

};

function randomNumberMax(max) {
	
	if(!max || !Number(max) || max < 0 || max === 0) throw new Error("NazmaJS - Please include an id of a number!");
	
	return Number(Math.floor(Number(randomNumberSystem(max)) * Math.floor(Number(max))));

};

function randomNumberSystem(maxNumber) {
	
	let max = Number(maxNumber), random = Number(Math.random());
	
	if(max === random) random = randomNumberSystem(max);
	
	if(max < random) random = randomNumberSystem(max);
	
	return Number(random);
	
};