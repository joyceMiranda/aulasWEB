$(document).ready(function(){
	
	$(".imgCesta").click(function(){
		adicionaProdutoCarrinho($(this));
	});
	
	$("#imgLista").click(listaProdutosCarrinho);
	listaProdutosCarrinho();

});

function listaProdutosCarrinho(){
	if(window.localStorage.getItem("carrinho") == null){
		$("#listaProdutos").html("Carrinho Vazio");
	}else{
		carrinho = JSON.parse(
					window.localStorage.getItem("carrinho"));
		itens = "";
		for(i=0;i<carrinho.length;i++){
			produto = JSON.parse(carrinho[i]);
			itens = itens + 
				"<div class='produtoLista'>" + produto.Nome + "<br>" + 
				produto.Valor + "</div>" ;
		}	
		itens = itens + "<br><input type='button' value='ESVAZIAR CARRINHO' onclick='esvaziarCarrinho()' id='btnEsvaziaCarrinho' /> " ;
		$("#listaProdutos").html(itens);
	}
}

function esvaziarCarrinho(){
	window.localStorage.removeItem("carrinho");
	listaProdutosCarrinho();
}

function adicionaProdutoCarrinho(elemento){
	id = elemento.attr("id");
	nome = $("#nome"+id).text();
	valor = $("#valor"+id).text();
	
	produto = 
		JSON.stringify(
			{
				"Id"   : id,
				"Nome" : nome,
				"Valor": valor
			}		
		);
		
	carrinho = [];
	if(window.localStorage.getItem("carrinho") != null){
		carrinho = JSON.parse(
		window.localStorage.getItem("carrinho"));
	}
	carrinho.push(produto);
	window.localStorage.setItem("carrinho", 
								JSON.stringify(carrinho));
	alert('Produto adicionado!');	
	
	listaProdutosCarrinho();
}





