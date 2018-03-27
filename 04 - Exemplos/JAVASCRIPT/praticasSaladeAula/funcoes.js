$(document).ready(function(){
	
	$("#btnValidar").on("click", function(){
		validar();
	});
	
	$("#txtNome").val(
	window.localStorage.getItem("usuario"));
	
	
});

function validar(){
	if($("#txtNome").val() == ""){
		alert("Informe o nome");
	}
}