$(document).ready(
	function(){
		
		$(".carrinho").on("click", 
			function(){
				addProduto($(this));
			}
		);
		
		$("#imgLista").on("click", showCarrinho);
		
	}
);

function esvaziarCarrinho(){
	window.localStorage.removeItem("carrinho");
	showCarrinho();
}

function showCarrinho(){
	carrinho = 
		JSON.parse(
			window.localStorage.getItem("carrinho"));
	
	if(carrinho != null){
		itens = "<table class='listaProdutos'>";
		for(i=0; i < carrinho.length; i++){
			produto = JSON.parse(carrinho[i]);
			id = produto.id;
			nome = produto.nome;
			valor = produto.valor;
			
			itens = itens + 
					"<tr><td>" + id + "</td><td>" + 
					nome + "</td><td>" + valor + "</td></tr>"; 
			
		}
		
		itens = itens + "</table>"  + "<br><input type='button' value='ESVAZIAR CARRINHO' onclick='esvaziarCarrinho()' id='btnEsvaziaCarrinho' /><br><br> " ;
		$("#listaProdutos").html(itens);
		
		$("#listaProdutos").html(itens);
		
		
	}else{
		$("#listaProdutos").html("Carrinho Vazio <br><br>");
	}
}

function addProduto(produto){
	id = produto.attr("id");
	nome = $("#nome"+id).text();
	valor = $("#valor"+id).text();
	
	produto = JSON.stringify(
		{
			"id" : id,
			"nome" : nome,
			"valor" : valor
		}
	);
	
	carrinho = [];
	if(window.localStorage.getItem("carrinho") != null){
		carrinho = JSON.parse(
		window.localStorage.getItem("carrinho"));
	}	
	carrinho.push(produto);
	window.localStorage.setItem("carrinho", 
		JSON.stringify(carrinho) );
	
	alert("Produto adicionado :: " + nome);
	
	showCarrinho();

}
