angular.module('aplicacao').service('AlunosCollectionService', function($filter){

	var alunos = [{'nome': 'Joãozinho', 'idade': 9},
	              {'nome': 'Ricardinho', 'idade': 11},
	              {'nome': 'Felipinho', 'idade': 11},
	              {'nome': 'Zildinha', 'idade': 14},
	              {'nome': 'Marianinha', 'idade': 10},
	              {'nome': 'Luluzinha', 'idade': 12}];


	this.getAlunos = function(){
		return alunos;
	}

	this.adicionarAluno = function(aluno){
		alunos.push(aluno);
	}


	var ordenadoPorNome = false;
	var ordenadoPorIdade = false;

	this.ordenarPorNome = function(){
		ordenadoPorNome = !ordenadoPorNome;
		alunos = $filter('orderBy')(alunos, 'nome', ordenadoPorNome);
	}

	this.ordenarPorIdade = function(){
		ordenadoPorIdade = !ordenadoPorIdade;
		alunos = $filter('orderBy')(alunos, 'idade', ordenadoPorIdade);
	}

});

