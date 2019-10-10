function validar(){
	var login = 
		document.getElementById("txtLogin").value;
	var senha = 
		document.getElementById("txtSenha").value;
	if(login == ""){
		alert("Login obrigatório!");
		return false;
	}else if(senha == ""){
		alert("Senha obrigatória!");
		return false;
	}
	return true;
}

function mudaCorDeFundo(color){
	document.body.style.backgroundColor = color;
}


