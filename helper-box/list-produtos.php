
<div class="list-produtos">
	<ul class="ul-produto">
	<?php 
		
		foreach ($produtos as $key => $value) { ?>
			<li class="li-produto">
				<div style="text-align: center;">
					<img class="img-produto" src="<?php echo $value['img'];?>">
				</div>
				<div class="titulo-produto">
					<span style="color: white;"><?php echo $value['nome'];?></span>
				</div>
				<div class="desc-produto">
					<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER LACUS ANTE, ALIQUAM AC AUGUE VITAE, PRETIUM ORNARE METUS. VIVAMUS AT CONSEQUAT EST. ETIAM NEC ULLAMCORPER DIAM. INTEGER A SCELERISQUE ORCI</p>
					<br>
					<del style="color: gray;">De: <span>R$ 5.745,98</span></del><br>
					<span class="valor-atual">R$ 343,50</span>
				</div>
				<div onclick="klikaj('<?php echo $key; ?>')"  class="btn-adc-cart">
					<span>ADICONAR AO CARRINHO</span>
				</div>
			</li>
		<?php }
	?>
	</ul>
</div>