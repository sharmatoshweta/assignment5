myApp.controller('maincontroller', ['$http', 'gotData', function ($http, gotData) {

	var main = this;

	main.allData = [];

	main.houseData;

	main.charData;

	main.bookData;

	main.gethousename = function () {

		gotData.getHouse()
			.then(function successCallback(response) {

				main.houseData = response.data;

				main.allData = main.houseData;

				main.getcharname();

			}, function errorCallback(response) {

				console.log('Some error occurred');

			});

	} // end gethousename

	main.getcharname = function () {

		gotData.getCharacter()
			.then(function successCallback(response) {

				main.charData = response.data;

				main.allData = main.allData.concat(main.charData);

				main.getbookname();

			}, function errorCallback(response) {

				console.log('Some error occurred');

			});

	} // end getcharname

	main.getbookname = function () {

		gotData.getBook()
			.then(function successCallback(response) {

				main.bookData = response.data;

				main.allData = main.allData.concat(main.bookData);

			}, function errorCallback(response) {

				console.log('Some error occurred');

			});

	}

	main.onlyCharacters = function () {

		main.allData = [];

		main.allData = main.charData;

	} // end onlyCharacters

	main.onlyHouses = function () {

		main.allData = [];

		main.allData = main.houseData;	

	} // end onlyHouses

	main.onlyBooks = function () {

		main.allData = [];

		main.allData = main.bookData;

	} // end onlyHouses

	main.allDetails = function () {

		main.allData = [];

		main.allData = main.allData.concat(main.houseData);

		main.allData = main.allData.concat(main.charData);

		main.allData = main.allData.concat(main.bookData);


	} // end allDetails




	main.gethousename();



}]);//end ctrl