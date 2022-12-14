function selectionSort(array) {
	// New array to sort elements into.
	var newArray = [];
	// While the original array's length is more than 0, 
	// it will take the smallest element from the old array
	// and put it at the end of the new one until the old array is out of elements.
	while (array.length > 0) {
		// Variable that finds the smallest element of the old array.
		let smallestElement = Math.min(...array);
		// Finds its index.
		let indexOfSE = array.indexOf(smallestElement);
		// This takes that specific element out of the original array.
		array.splice(indexOfSE, 1);
		// This puts it into the new array at the very end so that it is above the first smallest.
		let addElementToArray = newArray.push(smallestElement);
	}
	return newArray;
}

module.exports = selectionSort;
