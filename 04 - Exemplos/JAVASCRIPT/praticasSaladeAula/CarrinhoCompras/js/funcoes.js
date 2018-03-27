$(document).ready(function(){
	
	
	$("imgCesta").on("click", function(){
		
	});
});

document.getElementById("txtCodigo").innerHTML

function addProduto(produto){
	id = $(produto).attr("id");
	carrinho = [];	
	if(localStorage.getItem("carrinho") != null){
		carrinho = JSON.parse(localStorage.getItem("carrinho"));
	}
	carrinho.push(id);
	localStorage.setItem("carrinho", JSON.stringify(carrinho));
	alert('Produto: ' + id + "adicionado!");
}

function listarProdutos(){
	listaProdutos = "";
	if(localStorage.getItem("carrinho") == null){
		listaProdutos = "Carrinho Vazio!";
	}else{
		carrinho = JSON.parse(localStorage.getItem("carrinho"));
		for(i=0;i<carrinho.length;i++){
			listaProdutos = listaProdutos + "<br/>" + carrinho[i];
		}
	}
	$("#divCarrinho").html(listaProdutos)
}





