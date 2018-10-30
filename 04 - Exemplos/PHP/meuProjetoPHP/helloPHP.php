<!doctype html>
<html>
	<head>
		<title>Hello PHP!</title>
	</head>
	<body>
		<?php
			
			echo "Hello PHP!!";
			
			echo "<br><br> <strong> Ex. 1 - calculaIdade() </strong> <br><br> ";
			
			function calculaIdade($anoNasc){
				return (date("Y") - $anoNasc);				
			}	

			echo "A idade é: " 
						. calculaIdade(1918);
			
			
			echo "<br><br> <strong> Ex. 2 - printDate() </strong> <br><br> ";
			
			function printDate($data){
				$dia = substr($data,0,2);
				$mes = substr($data,3,2);
				$ano = substr($data,6,4);
				
				echo "Dia: $dia <br>";
				echo "Mês: $mes <br>";
				echo "Ano: $ano <br>";
			}
			
			printDate("22/10/2018");
			
			echo "<br><br> <strong> Ex. 3 - nomeSobrenome() </strong> <br><br> ";

			function nomeSobrenome($nomeCompleto){
				$partesNome = explode(" ", $nomeCompleto);
				$nome = $partesNome[0];
				$sobrenome 
				= $partesNome[sizeof($partesNome) - 1];
				
				echo "$nome $sobrenome";
			}
			
			nomeSobrenome("Joyce Miranda dos Santos");
			
			echo "<br><br> <strong> Ex. 4 - produtoMaiorFreq() </strong> <br><br> ";

			function produtoMaiorFreq($carrinho){
				$produtosFreq =
					array_count_values($carrinho);
				print_r($produtosFreq);
				
				$maiorFreq = 0;
				$produtoMaiorFreq = "";
				
				foreach($produtosFreq as $produto => $freq){
					if($freq > $maiorFreq){
						$maiorFreq = $freq;
						$produtoMaiorFreq = $produto;
					}
				}
				echo "<br>** $produtoMaiorFreq => 
								$maiorFreq und(s)";
			}
			
			$carrinho = 
				array("a","a","b","c","c","c");
				
			produtoMaiorFreq($carrinho);
			
			
			
			
			
			
			
			
		?>
	</body>
</html>