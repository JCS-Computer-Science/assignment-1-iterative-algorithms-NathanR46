function linearSearch(array, searchTerm) {
	var searchedElement = "";
	var index = 0;
	while (searchedElement > searchTerm || searchedElement < searchTerm){
		searchedElement = array[index];
		if (searchedElement > searchTerm || searchedElement < searchTerm){
			index += 1;
		}
	}
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
	return index;
}

module.exports = linearSearch;
