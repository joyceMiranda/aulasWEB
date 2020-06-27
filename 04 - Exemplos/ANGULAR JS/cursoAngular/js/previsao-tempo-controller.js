angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource){

	var weatherChanel = 
		$resource(
			'http://api.openweathermap.org/data/2.5/weather?q=Rio de Janeiro,BR&units=metric&APPID=305bd017d8cd1bd5528226603b96b93b');

	var getWeather = function(){
		weatherChanel.get().$promise.then(function(response){
			$scope.tempo = response;
			console.log($scope.tempo);
		}, function(promise) {
			alert('Erro ao acessar recurso!');			
		});
	}

	getWeather();

});



