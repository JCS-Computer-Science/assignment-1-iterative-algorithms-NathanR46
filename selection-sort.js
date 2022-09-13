function selectionSort(array) {
	// need to make while loop to loop min swap but also ignore the first index on the second run and the second index on the third run...
	var newArray = [];
	while (array.length > 0) {
		let smallestElement = Math.min(...array);
		let indexOfSE = array.indexOf(smallestElement);
		array.splice(indexOfSE, 1);
		let addElementToArray = newArray.push(smallestElement);
	}
	return newArray;
	console.log(newArray);
}

module.exports = selectionSort;
