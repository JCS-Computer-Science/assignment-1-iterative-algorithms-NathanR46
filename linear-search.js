function linearSearch(array, searchTerm) {
	var searchedElement = "";
	var index = 0;
	// Each index is searched by checking to see if it equals the search term
	while (searchedElement > searchTerm || searchedElement < searchTerm) {
		// This makes it equal the next index that it hasn't searched yet
		searchedElement = array[index];
		// If it doesn't equal, it makes the index equal the next index that hasn't been searched
		if (searchedElement > searchTerm || searchedElement < searchTerm) {
			index += 1;
		}
	}
	return index;
}

module.exports = linearSearch;
