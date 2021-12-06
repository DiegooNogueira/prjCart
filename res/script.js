	//variaveis globais
	var compras = [];
	var modalCart;
	var modalPedi;
	var compraLi;

	//FUNCAO ABAIXO ACONTECE QUANDO A PAGINA É CARREAGADA
	//O lista = ul de produtos onde a listagem de produtos ira ira
	//foreach roda array de produtos adicionando li de cada produto na listagem

	window.onload = function() {
		var lista  = document.getElementById("ul-produtos").innerHTML;
		produtos.forEach(element => {
			li = '<li class="li-produto">'+
					'<div class="div-img-produto">'+
						'<img class="img-produto" src="'+element.img+'">'+
				 '</div>'+
				 '<div class="titulo-produto">'+
					'<span style="color: white;">'+element.nome+'</span>'+
				 '</div>'+
				 '<div class="desc-produto">'+
				 '<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER LACUS ANTE,'+
				  'ALIQUAM AC AUGUE VITAE, PRETIUM ORNARE METUS. VIVAMUS AT CONSEQUAT EST. ETIAM NEC'+
				  'ULLAMCORPER DIAM. INTEGER A SCELERISQUE ORCI</p>'+
				'<br>'+
				'<del style="color: gray;">De: <span>R$ 5.745,98</span></del><br>'+
				'<span class="valor-atual">R$ '+element.valor.toFixed(2)+'</span>'+
			'</div>'+
			'<div onclick="openModalPedido('+element.id+')"  class="btn-adc-cart">'+
				'<span style="font-size: 12px;">ADICONAR AO CARRINHO</span>'+
			'</div>'+
		'</li>';
			lista = lista +li;
		});
		
		document.getElementById("ul-produtos").innerHTML = lista;
		modalCart = document.getElementById("modal-cart");
		modalPedi = document.getElementById("modal-pedido");
	};

	function addCar(i) {
		var input = document.querySelector("#qtd-pedido");
		var qtd = input.value;

		var objIndex = compras.findIndex((obj => obj.id == i));
		if(objIndex >= 0){
			compras[objIndex].qtd = parseInt(compras[objIndex].qtd) + parseInt(qtd);
		}else{
			 var objIndex = produtos.find( pr => pr.id === i );
			var pk= {
				...objIndex,
				'qtd' :	 parseInt(qtd),
			}
			compras.push(pk);
		}
		attValores();
		input.value = 1;
		CloseModal();
	}
	//ABRE MODAL DO CARRINHO
	function openModalCart(){
			modalCart.style.display = "block";
	}

	function openModalPedido(i){
		//MONTA BOTAO DE ADICONAR PRODUTOS COM ID DO PRODUTO SELECIONADO
		var btnAdicinar = '<div onclick="addCar('+i+')" style="background: green; width: auto; padding:8px 32px 8px 32px;">'+
	               		  		'<span style="color: white; font-weight: 600;">ADICIONAR</span>'+
	            		   '</div>';

	    document.getElementById("box-add").innerHTML = btnAdicinar;
		modalPedi.style.display = "block";
	}

	//MONTA A VIEW QUANDO É CLICADO NO CARRINHO
	function montarPedido() {

		//MONTA LISTAGEM DE PRODUTOS
		montaListagemPedido();
		attValores();

		//CHAMA FUNCAO PARA ABRIR MODAL DO CARRINHO
		openModalCart();
 	}

 	function montaListagemPedido(){
 		var compraLi = '';

		//FOREACH ABAIXO MONTA VIEW DA LISTAGEM DO PEDIDO
		compras.forEach(element => {
			compraLi = compraLi + '<li id="li-'+element.id+'"class="li-pedido">'+
										'<span class="desc-pedido">'+element.nome+'</span>'+
										'<div style="display: inline-flex;flex-direction: row; float:right; margin-top: -32px;">'+
											'<span class="btn-ger-qtd" onclick="remove('+element.id+')">-</span>'+
												'<span id="compra-'+element.id+'" class="qtd-item">'+element.qtd+'</span>'+
											'<span class="btn-ger-qtd" onclick="adicona('+element.id+')">+</span>'+
										'</div>'+
							  	   '</li>';
		});

		document.getElementById("ul-compra").innerHTML = compraLi;
 	}
 	//ATUALIZA VALORES TOTAIS DE TELA
 	function attValores(){
 		var total = compras.reduce(getValorTotal, 0);
		var totalIpi = compras.reduce(getTotalIpi, 0);
		var qtdTotal = compras.reduce(getQtdTotal, 0);
		

		//SETA EM TELA VALORES TOTAIS
		document.getElementById("valor-total").innerHTML =  "R$ "+total.toFixed(2);
		document.getElementById("valor-ipi").innerHTML =  "R$ "+totalIpi.toFixed(2);
		document.getElementById("qtd-venda").innerHTML = qtdTotal;

		var valorfinal = total + totalIpi;
		document.getElementById("total").innerHTML =  "R$ "+valorfinal.toFixed(2);
 	}
  
  	//FECHA MODAIS
   	function CloseModal() {
		modalCart.style.display = "none";
		modalPedi.style.display = "none";
	}

  	//SOMA TOTAL DO IPI
	function getTotalIpi(total, item) {
		return total + (((item.valor / 100) * item.ipi) * item.qtd) ;
	}

	//SOMA VALOR TOTAL DOS PRODUTOS
  	function getValorTotal(total, item) {
		return total + (item.valor * item.qtd) ;
    }

    //SOMA QUANTIDADE TOTAL DOS PRODUTOS
	function getQtdTotal(total, item) {
		return total + parseInt(item.qtd) ;
	}
  
  	//FECHA MODAIS COM CLICK FORA DO MODAL 
	window.onclick = function(event) {
		if (event.target == modalCart || event.target == modalPedi) {
	  		CloseModal();
		}
  	}

  	function adicona(i){
  		//PEGA O INDEX DO VENDEDOR QUE JA EXISTE   
        var objIndex = compras.findIndex((obj => obj.id == i));
        //ATUALIZA VALOR CONFORME O INDEX ENCONTRADO
        compras[objIndex].qtd = parseInt(compras[objIndex].qtd) + 1;
        document.getElementById("compra-"+i).innerHTML = compras[objIndex].qtd;
        attValores();
  		
  	}

  	function remove(i){
  		console.log(compras);
  		//PEGA O INDEX DA COMPRA QUE JA EXISTE   
        var objIndex = parseInt(compras.findIndex((obj => obj.id == i)));
        //ATUALIZA VALOR CONFORME O INDEX ENCONTRADO
        if(parseInt(compras[objIndex].qtd)>1){
        	compras[objIndex].qtd = parseInt(compras[objIndex].qtd) - 1;
       		document.getElementById("compra-"+i).innerHTML = compras[objIndex].qtd;
        }else{
        	var result = confirm("Deseja excluir o item: " + compras[objIndex].nome + " da sua compra ?");
        	if(result){
        		
        		console.log(compras[objIndex]);
        		compras.splice(compras[objIndex],1);
        		montaListagemPedido();
        	}
        }
        attValores();
       
  	}