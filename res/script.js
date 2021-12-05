var compras = [];
var modal;
var compraLi;
window.onload = function() {
	var lista  = document.getElementById("ul-produtos").innerHTML;
	produtos.forEach(element => {
		li = '<li class="li-produto" id="ul-produtos">'+
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
		'<div onclick="addCar('+element.id+')"  class="btn-adc-cart">'+
			'<span style="font-size: 12px;">ADICONAR AO CARRINHO</span>'+
		'</div>'+
	'</li>';
		lista = lista +li;
	});
	
	document.getElementById("ul-produtos").innerHTML = lista;
	modal = document.getElementById("modal-cart");
		};
function addCar(i) {
    var objIndex = produtos.find( pr => pr.id === i );
	var pk= {
		...objIndex,
		'qtd' :	 2,
	}
	compras.push(pk);
	var qtdTotal = compras.reduce(getQtdTotal, 0);
	document.getElementById("qtd-venda").innerHTML = qtdTotal;
}
// When the user clicks the button, open the modal 
 function openModal() {
	 var compraLi = '';
	compras.forEach(element => {
		compraLi = compraLi + '<li class="li-pedido">'+
									'<span class="desc-pedido">'+element.nome+'</span>'+
							  '</li>';
	});
	document.getElementById("ul-compra").innerHTML = compraLi;
	var total = compras.reduce(getValorTotal, 0);
	var totalIpi = compras.reduce(getTotalIpi, 0);

	document.getElementById("valor-total").innerHTML =  "R$ "+total.toFixed(2);
	document.getElementById("valor-ipi").innerHTML =  "R$ "+totalIpi.toFixed(2);
	var valorfinal = total + totalIpi;
	document.getElementById("total").innerHTML =  "R$ "+valorfinal.toFixed(2);
	modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
   function CloseModal() {
	modal.style.display = "none";
  }
  function getTotalIpi(total, item) {
	return total + (((item.valor / 100) * item.ipi) * item.qtd) ;
	}

  	function getValorTotal(total, item) {
	return total + (item.valor * item.qtd) ;
	}

	function getQtdTotal(total, item) {
		return total +  item.qtd ;
		}
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }