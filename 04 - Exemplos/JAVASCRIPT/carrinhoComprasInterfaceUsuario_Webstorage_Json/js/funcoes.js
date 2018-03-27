			$(document).ready(function(){
				
				$(".imgProduto").css("width", "100px");
				$(".imgCesta").css("width", "25px");
				
				$("#btnShow").on("click", function(){
					listarProdutos();
				});

				$(".imgCesta").on("click", function(){
						addCarrinho($(this));
				});
					
			});
			
			function listarProdutos(){
					carrinho = [];
					if(window.sessionStorage.getItem("carrinho") != null){
						carrinho = JSON.parse(window.sessionStorage.getItem("carrinho"));
					}
					itens = "";
					for(i=0; i<carrinho.length;i++){
						itens = itens + "<br>" + JSON.parse(carrinho[i]).Nome + " - " + JSON.parse(carrinho[i]).Valor;
					}
					$("#produtosCarrinho").html(itens);
				}
			
			function addCarrinho(component){
				//alert(component.id) simply javascript
				id = $(component).attr('id');
				produto = JSON.stringify({
							Id: id,
							Nome: $("#nome"+id).text(),
							Valor: $("#valor"+id).text()
							});
				carrinho = [];
				if(window.sessionStorage.getItem("carrinho") != null){
					carrinho = JSON.parse(window.sessionStorage.getItem("carrinho"));
				}
				carrinho.push(produto);
				window.sessionStorage.setItem("carrinho", JSON.stringify(carrinho));				
				alert('Produto adicionado com sucesso');
				listarProdutos();
			}