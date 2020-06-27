angular.module('aplicacao').controller('ListagemAlunosController', function($scope, $filter, AlunosCollectionService){
	

	$scope.nome = "Joyce Miranda";
	var nome = "Fulano de Tal";

	$scope.alunos = AlunosCollectionService.getAlunos();


	$scope.iniciado = true;

	
	$scope.hoje = new Date();


	$scope.finalizar = function(){
		$scope.iniciado = false;
	};


	$scope.iniciar = function(){
		$scope.iniciado = true;
	};

	
	$scope.ordenarPorNome = function(){
		AlunosCollectionService.ordenarPorNome();
		$scope.alunos = AlunosCollectionService.getAlunos();
	}

	$scope.ordenarPorIdade = function(){
		AlunosCollectionService.ordenarPorIdade();
		$scope.alunos = AlunosCollectionService.getAlunos();
	}

});