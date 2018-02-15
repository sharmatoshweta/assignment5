myApp.service('gotData', ['$http', function ($http) {

	var urlHouse = 'https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50';

	var urlCharacter = 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=60';

	var urlBook = 'https://www.anapioficeandfire.com/api/books?page=1&pageSize=25';

	this.getHouse = function () {

		return $http.get(urlHouse);

	} // end getHouse

	this.getCharacter = function () {

		return $http.get(urlCharacter);

	} // end getCharacter

	this.getBook = function () {

		return $http.get(urlBook);

	} // end getBook

}]); // end service


myApp.service('gotFullData', ['$http', function ($http) {

	var urlHouse = 'https://www.anapioficeandfire.com/api/houses/';

	var urlCharacter = 'https://www.anapioficeandfire.com/api/characters/';

	var urlBook = 'https://www.anapioficeandfire.com/api/books/';

	this.getBookDetail = function (num) {

		return $http.get(urlBook + num);

	} // end getBookDetail

	this.getCharDetail = function (num) {

		return $http.get(urlCharacter + num);

	} // end getCharDetail

	this.getHouseDetail = function (num) {

		return $http.get(urlHouse + num);

	} // end getHouseDetail

}]); // end service