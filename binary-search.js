function binarySearch(array, searchTerm) {
	let arrayLength = "";
	let divideArray = "";
	let checkElement = -1;
	while (checkElement > searchTerm || checkElement < searchTerm) {
		arrayLength = array.length;
		divideArray = arrayLength / 2;
		checkElement = array[divideArray];
		if (checkElement == searchTerm) {
			return checkElement;
		}
		if (checkElement > searchTerm) {
			array.splice(-divideArray);
		}
		if (checkElement < searchTerm) {
			for (let i = 0; i < divideArray; i += 1) {
				let deleteFirstHalf = array.shift();
			}
		}
	}
}

// Note: It works, but you need to make divideArray stop making decimals...
module.exports = binarySearch;
