<?php
  $produtos = array( 

            "0" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 4.32, 

            ),

            "1" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 4.23, 

            ),

           "2" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 6.23, 

            ),

            "3" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 4.32, 

            ),

            "4" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 4.23, 

            ),

           "5" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 6.23, 

            ),

           "6" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 4.23, 

            ),

           "7" => array (

               "nome"=>"CADEIRA",
               "classe" => "Periferico",
               "img" => "https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg",
               "valor" => 6.23, 

            )
       );

?>
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript">
		
	</script>
	<script type="text/javascript"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Principal</title>
	<link rel="stylesheet" type="text/css" href="res/style.css">
	<script type="text/javascript" src="res/script.js"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap" rel="stylesheet">
</head>
<body>
	<?php include('helper-box/header.php');?>
	<div style="width:100%; display: grid; place-items: center;">
		<?php include('helper-box/list-produtos.php');?>
	</div>
</body>
</html>