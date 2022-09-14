function insertionSort(array) {
	let arrayLength = array.length;
	for(index = 1; index < arrayLength; index += 1){
		let element = array[index];
		let smallerArray = index - 1;
		while (smallerArray > -1 && element < array[smallerArray]){
			array[smallerArray + 1] = array[smallerArray];
			smallerArray -= 1;
		}
		array[smallerArray + 1] = element;
	}
	return array;
}

module.exports = insertionSort;
