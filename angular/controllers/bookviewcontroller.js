myApp.controller('bookviewcontroller', ['gotFullData', '$routeParams', function (gotFullData, $routeParams) {

	this.bookdata;

	var main = this;

	var num = $routeParams.id;

	this.getData = function (num) {

		gotFullData.getBookDetail(num)
			.then(function successCallback(response) {

				main.bookdata = response.data;

			}, function errorCallback(response) {

				console.log('Some error occurred');

			});

	} // end getData

	this.getData(num);

}]); // end bookviewcontroller