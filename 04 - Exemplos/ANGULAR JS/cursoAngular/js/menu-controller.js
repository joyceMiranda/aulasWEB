angular.module('aplicacao').controller('MenuController', function($scope, $location){
	
	$scope.goInicio = function() {
		$location.path('/aplicacao-inicial')
	};

	$scope.goListagem = function() {
		$location.path('/aplicacao-listagem')		
	};

	$scope.goCadastro = function() {
		$location.path('/aplicacao-cadastro')		
	};

	$scope.goPrevisao = function() {
		$location.path('/aplicacao-previsao')		
	};

});

