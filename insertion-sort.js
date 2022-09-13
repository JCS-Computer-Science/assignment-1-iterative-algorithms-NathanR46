function insertionSort(array) {
	// start code to help me swap elements
	console.log(array);
	if (array[0] > array[1]) {
		let swapElement = array[0] 
		array[0] = array[1];
		array[1] = swapElement;
		console.log("Swapped!");
	}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	return array;
}

module.exports = insertionSort;
