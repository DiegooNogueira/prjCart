<!DOCTYPE html>
<html>
<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Principal</title>
	<link rel="stylesheet" type="text/css" href="res/style.css">
	<script type="text/javascript" src="res/script.js"></script>
   <script type="text/javascript" src="model/produtos.js"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap" rel="stylesheet">
</head>
<body>
	<?php include('helper-box/header.php');?>
	<div style="width:100%; display: grid; place-items: center;">
		<?php include('helper-box/list-produtos.php');?>
	</div>
      <div id="modal-cart" class="modal">
         <div class="modal-content">
            <span onclick="CloseModal()" class="close">&times;</span>
            <h1>Carrinho de Compras</h1>
            <div style="width:100%; display:inline-flex;">
               <div style="width:75%;background-color:red;">
                  <ul id="ul-compra">
                  </ul>
               </div>
               <div style="width:25%;background-color:blue;">
                  <span>Valor total dos Produtos</span><span  id="valor-total">R$ </span><br>
                  <span>Valor de Ipi<span></span>R$ </span><br>
                  <span>Desconto<span></span>R$ </span><br>
                  <hr>
                  <span>Total<span></span>R$ </span><br>
               </div>
            <div>
         </div>
      </div>
</body>
</html>