angular.module('aplicacao').controller('NovaInscricaoController', function($scope, AlunosCollectionService){
	
	$scope.submeter = function() {
		if($scope.form_1.$valid) {
			novo_aluno = {};
			novo_aluno['nome'] = $scope.nome_aluno;
			novo_aluno['idade'] = parseInt($scope.idade_aluno);
			AlunosCollectionService.adicionarAluno(novo_aluno)
		} else {
			alert("Preencha o formulário corretamente");
		}
	};

});

