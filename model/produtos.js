var produtos = [
	{
		'id':1,
		'nome': 'Cadeira',
		'img' : 'https://img.terabyteshop.com.br/produto/p/cadeira-gamer-redragon-metis-c102-black-c102-b_82283.jpg',
		'valor' : 565.92,
		'ipi' : 23,
	},
	{
		'id':2,
		'nome': 'Gabinete',
		'img' : 'https://img.terabyteshop.com.br/produto/g/gabinete-gamer-gamemax-infinit-m908-rgb-mid-tower-sfonte-branco_69629.jpg',
		'valor' : 354.92,
		'ipi' : 14,
	},{
		'id':3,
		'nome': 'Monitor',
		'img' : 'https://m.media-amazon.com/images/I/61J9TCN3gCL._AC_SL1000_.jpg',
		'valor' : 756.92,
		'ipi' : 32,
	},{
		'id':4,
		'nome': 'SSD',
		'img' : 'data:image/jpeg;base64,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',
		'valor' : 342.92,
		'ipi' : 23,
	},{
		'id':5,
		'nome': 'HD',
		'img' : 'https://waz.vteximg.com.br/arquivos/ids/208761-500-500/119849-1-HD_16TB_SAS_Seagate_Exos_Enterprise_Capacity_ST16000NM002G_3_5pol_12Gbs_7200_RPM_256MB_Cache_Helium_119849.jpg?v=637281939116800000',
		'valor' : 134.92,
		'ipi' : 13,
	},{
		'id':6,
		'nome': 'MOUSE PAD',
		'img' : 'https://cdn.dooca.store/15/products/mousepad-gamer-cougar-speed-ex-l-3mspdnnl_1600x1600+fill_ffffff.jpg?v=1607966755',
		'valor' : 23.92,
		'ipi' : 2,
	},{
		'id':7,
		'nome': 'MOUSE ',
		'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfA3ebP3t-htz9nc4eWAC5D4l1xegq7gCf6V5QzR-b7uemL0RC286zj2mHQYxQX_5eNc0&usqp=CAU',
		'valor' : 234.92,
		'ipi' : 44,
	},{
		'id':8,
		'nome': 'TECLADO',
		'img' : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdE8_XHNVXLNefFVFf_6isMOXYlHrBqBa2DHi1yBSvdmoMFkTO6EbGPpftYfjAutLWcoM48Y1rX2h6UWc5fOLcODwCz_yIfbqyiz4cfvA9sGS7oaZSC5Zv&usqp=CAE',
		'valor' : 344.92,
		'ipi' : 32,
	}
];