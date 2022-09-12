function selectionSort(array) {
	// need to make while loop to loop min swap but also ignore the first index on the second run and the second index on the third run...
	while (condition) {
		
	}

	// code that takes smallest and swaps it with the first element
	let smallestElement = Math.min(...array);
	let indexOfSE = array.indexOf(smallestElement);
	console.log(indexOfSE);
	let swapElement = array[indexOfSE];
	array[indexOfSE] = array[0];
	array[0] = swapElement;
	return array;
}

module.exports = selectionSort;
