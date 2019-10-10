$(document).ready(function(){
	
	$("#btnCalcIdade").on("click", 
		function(){
			calcIdade();
		}
	);
	
});

function calcIdade(){

	dataNasc = $("#data").val();
	
	if(dataNasc != ''){
		anoNasc = dataNasc.substr(0, 4);
			
		anoAtual = (new Date()).getFullYear();
		
		idade = anoAtual - anoNasc;
		
		$("#idade").val(idade);
		
	}else{
		alert('Para prosseguir, informe a data de nascimento!')
	}
}