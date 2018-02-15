myApp.controller('houseviewcontroller', ['gotFullData', '$routeParams', function (gotFullData, $routeParams) {

	this.housedata;

	var main = this;

	var num = $routeParams.id;

	this.getData = function (num) {

		gotFullData.getHouseDetail(num)
			.then(function successCallback(response) {

				main.housedata = response.data;

			}, function errorCallback(response) {

				console.log('Some error occurred');

			});

	} // end gethousedetail

	this.getData(num);

}]); // end houseviewcontroller