var app = angular.module('aplicacao', ['ngResource', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/aplicacao-inicial',{
		templateUrl: 'views/inicial.html'
	})
	.when('/aplicacao-listagem',{
		templateUrl: 'views/listagem-alunos_1.html'
	})
	.when('/aplicacao-cadastro',{
		templateUrl: 'views/cadastro-aluno_1.html'
	})
	.when('/aplicacao-previsao',{
		templateUrl: 'views/previsao.html'
	})
	.otherwise('/aplicacao-inicial')
	
});


