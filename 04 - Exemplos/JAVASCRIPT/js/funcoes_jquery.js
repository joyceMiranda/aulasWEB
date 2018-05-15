function somar() {
	var valor1 = parseFloat($("#valor1").val());
	var valor2 = parseFloat($("#valor2").val());
	if (!$.isNumeric(valor1)) {
		alert("Informe o valor 1");
	} else if (!$.isNumeric(valor2)) {
		alert("Informe o valor 2");
	} else {
		var soma = valor1 + valor2;
		$("#resultado").val(soma);
	}
}

$(document).ready(function() {
	$("#botao").on("click", somar());
});