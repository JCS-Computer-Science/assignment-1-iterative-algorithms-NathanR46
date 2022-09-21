function binarySearch(array, searchTerm) {
	// This makes a clone of the original array that is 
	// unaffected by the inevitable changes made to the original array.
	let clonedArray = [...array];
	// These are just set oustide the while loop because it's a habit.
	let arrayLength = "";
	let divideArray = "";
	let roundArray = "";
	let checkElement = -1;
	// While the element we are looking for doesn't equal the one being searched currently, 
	// then it will keep searching.
	while (checkElement > searchTerm || checkElement < searchTerm) {
		// This gets the array length and divides it 
		// so that it can eliminate half the array later if checkElement doesn't equal searchTerm.
		arrayLength = array.length;
		divideArray = arrayLength / 2;
		// I need to round this down so that it searches an actual index rather than a decimal index.
		roundArray = Math.floor(divideArray);
		let middle = roundArray;
		// This finally checks if it is the right index or not.
		checkElement = array[middle];
		// If it is equal to the search term, it will take the element and put it into the unaffected
		// array and return that index rather than returning an index that doesn't exist in the array that was changed.
		if (checkElement == searchTerm) {
			let index = clonedArray.indexOf(checkElement);
			console.log(array);
			console.log(clonedArray);
			console.log("It finally works yay");
			return index;
		}
		// This takes the last half of the array and deletes it since the 
		// middle of the array is greater than the searchTerm.
		if (checkElement > searchTerm) {
			array.splice(-middle);
		}
		// This takes this first half of the array and deletes all of those indexes 
		// with the middle index we got earlier since the middle of the array is less than the searchTerm.
		if (checkElement < searchTerm) {
			for (let i = 0; i < middle; i += 1) {
				let deleteFirstHalf = array.shift();
			}
		}
	}
}


module.exports = binarySearch;
