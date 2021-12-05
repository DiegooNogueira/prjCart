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
	<div style="width:100%; display: grid; place-items: center; margin-bottom:20px;">
		<?php include('helper-box/list-produtos.php');?>
	</div>
   <?php include('helper-box/modal-cart.php');?>
    <?php include('helper-box/modal-pedido.php');?>
</body>
</html>