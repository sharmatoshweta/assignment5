myApp.controller('charviewcontroller', ['gotFullData', '$routeParams', function (gotFullData, $routeParams) {

	this.chardata;

	var main = this;

	var num = $routeParams.id;

	this.getData = function (num) {

		gotFullData.getCharDetail(num)
			.then(function successCallback(response) {

				main.chardata = response.data;

			}, function errorCallback(response) {

				console.log('Some error occurred');

			});

	} // end getData

	this.getData(num);

}]); // end charviewcontroller