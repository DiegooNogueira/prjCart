var compras = [];
var modal;
window.onload = function() {
	var lista  = document.getElementById("ul-produtos").innerHTML;
	produtos.forEach(element => {
		li = '<li class="li-produto" id="ul-produtos">'+
				'<div style="text-align: center;">'+
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
			'<span class="valor-atual">R$ '+element.valor+'</span>'+
		'</div>'+
		'<div onclick="addCar('+element.id+')"  class="btn-adc-cart">'+
			'<span>ADICONAR AO CARRINHO</span>'+
		'</div>'+
	'</li>';
		lista = lista +li;
	});
	
	document.getElementById("ul-produtos").innerHTML = lista;
	modal = document.getElementById("myModal");
		};
function addCar(i) {
    objIndex = produtos.findIndex((obj => obj.id == parseInt(i)));
	compras.push(objIndex);
	console.log(compras);
	document.getElementById("qtd-venda").innerHTML = compras.length;
	
	modal.style.display = "block";
}
// When the user clicks the button, open the modal 
 function openModal() {
	modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
   function CloseModal() {
	modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }