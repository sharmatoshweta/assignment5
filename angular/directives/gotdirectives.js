myApp.directive('gotHouses',function() {

	return{
		
		restrict : 'E',

		templateUrl:'views/house-view.html'

	}

}); // end gotHouses

myApp.directive('gotChars',function(){

	return{
	
		restrict:'E',
	
		templateUrl:'views/char-view.html'
	
	}

}); // end gotChars

myApp.directive('gotBooks',function(){
	
	return{
	
		return:'E',
	
		templateUrl:'views/book-view.html'
	
	}
	
}); // end gotBooks