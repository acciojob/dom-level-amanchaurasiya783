//your JS code here. If required.
function findDOMLevel(elementId){
	let element = document.getElementById("level");
	let level = 0;
	while(element.parentNode){
		element = element.parentNode;
		level++;
	}
	return level;
}

alert("The level of the element is: " + findDOMLevel(level));