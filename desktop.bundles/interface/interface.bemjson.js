module.exports = {
	block: 'page',
	title: 'Interface',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'interface.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'interface.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'ibm' }
		},
		{ block: 'component', mods: { whitepaper: 'default' } }
	],
	content: [

		{
			block: 'tpl-layout',
			attrs: { style: 'margin-top: 40px;'},
			content: [
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { size: 'm', align: 'center' },
						content: [
							{
								block: 'tpl-grid',
								mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full' },
								content: [

									/* User */
									{
										block: 'user',
										mix: [
											// { block: 'theme', mods: { color: 'whitepaper-brand'} },
											{ block: 'component', mods: { whitepaper: 'brand' } },
											// { block: 'pt-card', mods: { view: 'default' } }
										],
										content: [
											{
												elem: 'info',
												// mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl' } },
												content: [
													{
														elem: 'user',
														mix: [
															// { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
															{ block: 'decorator', mods: { 'indent-b': 'xl' } },
														],
														content: [
															{
																block: 'avatar',
																// mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'm' } },
																content: {
																	elem: 'photo',
																	elemMods: { size: 'l' }
																}
															},
															{
																elem: 'about',
																// mix: { block: 'pt-icon-plus', elem: 'block' },
																content: [
																	{
																		block: 'text',
																		mods: { view: 'primary', size: 'xxl', weight: 'semibold' },
																		content: 'Матвей Рублёв'
																	},
																	{
																		block: 'text',
																		mods: { view: 'ghost', size: 'm', weight: 'semibold' },
																		content: '@rublev'
																	}
																]
															}
														]
													},
													{
														block: 'text',
														mods: { view: 'primary', size: 'xxxxl', weight: 'semibold' },
														content: '22 860 ₽'
													},
													{
														block: 'text',
														mods: { view: 'secondary', size: 'm', weight: 'semibold' },
														content: 'Используйте все возможности Яндекс.Денег: ограничений нет. Можно даже скопировать идентификацию в другой кошелек.'
													}
												]
											},
											{
												elem: 'wallet',
												// mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' } },
												content: [
													{
														block: 'button',
														mods: {
															theme: 'islands',
															size: 'l',
															view: 'action',
															width: 'max'
														},
														text: 'Пополнить'
													}
												]
											}
										]
									},
									/* /User */

									/* Payment */
									{
										block: 'payment',
										mix: [
											// { block: 'pt-form', mods: { border: 'all' }},
											{ block: 'component', mods: { whitepaper: 'default' }},
										],
										content: [
											{
												elem: 'header',
												// mix: { block: 'pt-form', elem: 'item', elemMods: { 'space-v': 'l', 'space-h': 'xl', border: 'bottom' } },
												content: [
													{
														block: 'text',
														mods: { view: 'primary', size: 'xxl', weight: 'bold' },
														content: 'Оплата мобильного'
													}
												]
											},
											{
												elem: 'content',
												// mix: { block: 'pt-form', elem: 'item', elemMods: { 'space-v': 'xxxl', 'space-h': 'xl', border: 'bottom' } },
												content: [
													{
														elem: 'item',
														// mix: { block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xl', distribute: 'between', 'vertical-align': 'center' } },
														content: [
															{
																elem: 'label',
																// mix: {  block: 'pt-form', elem: 'label', elemMods: { width: 'default' } },
																content: [
																	{
																		block: 'text',
																		mods: { view:'primary', size: 'l' },
																		content: 'Телефон'
																	}
																]
															},
															{
																block: 'input',
																mods: {
																	theme: 'islands',
																	size: 'l',
																	width: 'available'
																},
																placeholder: '89218008060'
															}
														]
													},
													{
														elem: 'item',
														// mix: {  block: 'pt-form', elem: 'item', elemMods: { 'indent-b': 'xl', distribute: 'between', 'vertical-align': 'center' } },
														content: [
															{
																elem: 'label',
																// mix: { block: 'pt-form', elem: 'label', elemMods: { width: 'default' }, },
																content: [
																	{
																		block: 'text',
																		mods: { view:'primary', size: 'l' },
																		content: 'Сумма'
																	}
																]
															},
															{
																block: 'input',
																mods: {
																	theme: 'islands',
																	size: 'l',
																	width: 'available'
																},
																placeholder: '500'
															}
														]
													}
												]
											},
											{
												elem: 'footer',
												// mix: { block: 'pt-form', elem: 'item', elemMods: { distribute: 'between', border: 'bottom', 'vertical-align': 'center', 'space-v': 'l',  'space-h': 'xl' }, },
												content: [
													{
														block: 'text',
														mods: { view:'ghost', size: 'l' },
														content: 'Проверьте номер'
													},
													{
														block: 'button',
														mods: {
															theme: 'islands',
															size: 'l',
															view: 'action'
														},
														text: 'Оплатить'
													}
												]
											}
										]
									},
									/* /Payment */

								]
							},
							{
								block: 'tpl-grid',
								attrs: { style: 'margin-top: 60px;'},
								mods: { 'xs-ratio': '1', 's-ratio': '1-1', 'm-ratio': '1-1-1', 'l-ratio': '1-1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'full' },
								content: [

									/* Product */
									{
										block: 'product',
										// mix: { block: 'pt-card', mods: { view: 'default', border: 'all' } },
										content: [
											{
												elem: 'graphic',
												// mix: { block: 'pt-card', elem: 'header', elemMods: { distribute: 'right', 'space-a': 's' } },
												content: {
													block: 'icon',
													mods: { name: 'lock', view: 'primary', size: 's' }
												}
											},
											{
												block: 'image',
												// mix: { block: 'pt-card', elem: 'image' },
												url: '/assets/minecraft.jpg'
											},	
											{
												elem: 'info',
												// mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 's', 'space-t': 's', } },
												content: [
													{
														elem: 'name',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 'l', weight: 'bold' },
																content: 'Minecraft'
															}
														]
													},
													{
														elem: 'price',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 's' },
																content: 'turn-based RPG developed by Airship Syndicate and published by THQ Nordic'
															}
														]
													}
												]
											},
											{
												elem: 'footer',
												// mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
												content: {
													block: 'tag',
													mods: { view: 'default', size: 's' },
													content: 'Role-playing'
												}
											}
										]
									},
									/* /Product */

									/* Product */
									{
										block: 'product',
										// mix: { block: 'pt-card', mods: { view: 'default', border: 'all' } },
										content: [
											{
												elem: 'graphic',
												// mix: { block: 'pt-card', elem: 'header', elemMods: { distribute: 'right', 'space-a': 's' } },
												content: {
													block: 'icon',
													mods: { name: 'lock', view: 'primary', size: 's' }
												}
											},
											{
												block: 'image',
												// mix: { block: 'pt-card', elem: 'image' },
												url: '/assets/nightwar.jpg'
											},	
											{
												elem: 'info',
												// mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 's', 'space-t': 's', } },
												content: [
													{
														elem: 'name',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 'l', weight: 'bold' },
																content: 'Nightwar'
															}
														]
													},
													{
														elem: 'price',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 's' },
																content: 'turn-based RPG developed by Airship Syndicate and published by THQ Nordic'
															}
														]
													}
												]
											},
											{
												elem: 'footer',
												// mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
												content: {
													block: 'tag',
													mods: { view: 'default', size: 's' },
													content: 'Role-playing'
												}
											}
										]
									},
									/* /Product */

									/* Product */
									{
										block: 'product',
										mix: { block: 'pt-card', mods: { view: 'default', border: 'all' } },
										content: [
											{
												elem: 'graphic',
												mix: { block: 'pt-card', elem: 'header', elemMods: { distribute: 'right', 'space-a': 's' } },
												content: {
													block: 'icon',
													mods: { name: 'lock', view: 'primary', size: 's' }
												}
											},
											{
												block: 'image',
												mix: { block: 'pt-card', elem: 'image' },
												url: '/assets/rayman.jpg'
											},	
											{
												elem: 'info',
												mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 's', 'space-t': 's', } },
												content: [
													{
														elem: 'name',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 'l', weight: 'bold' },
																content: 'Rayman'
															}
														]
													},
													{
														elem: 'price',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 's' },
																content: 'turn-based RPG developed by Airship Syndicate and published by THQ Nordic'
															}
														]
													}
												]
											},
											{
												elem: 'footer',
												mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
												content: {
													block: 'tag',
													mods: { view: 'default', size: 's' },
													content: 'Role-playing'
												}
											}
										]
									},
									/* /Product */

									/* Product */
									{
										block: 'product',
										mix: { block: 'pt-card', mods: { view: 'default', border: 'all' } },
										content: [
											{
												elem: 'graphic',
												mix: { block: 'pt-card', elem: 'header', elemMods: { distribute: 'right', 'space-a': 's' } },
												content: {
													block: 'icon',
													mods: { name: 'lock', view: 'primary', size: 's' }
												}
											},
											{
												block: 'image',
												mix: { block: 'pt-card', elem: 'image' },
												url: '/assets/redemption.jpg'
											},	
											{
												elem: 'info',
												mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 's', 'space-t': 's', } },
												content: [
													{
														elem: 'name',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 'l', weight: 'bold' },
																content: 'Redemption'
															}
														]
													},
													{
														elem: 'price',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 's' },
																content: 'turn-based RPG developed by Airship Syndicate and published by THQ Nordic'
															}
														]
													}
												]
											},
											{
												elem: 'footer',
												mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
												content: {
													block: 'tag',
													mods: { view: 'default', size: 's' },
													content: 'Role-playing'
												}
											}
										]
									},
									/* /Product */

									/* Product */
									{
										block: 'product',
										mix: { block: 'pt-card', mods: { view: 'default', border: 'all' } },
										content: [
											{
												elem: 'graphic',
												mix: { block: 'pt-card', elem: 'header', elemMods: { distribute: 'right', 'space-a': 's' } },
												content: {
													block: 'icon',
													mods: { name: 'lock', view: 'primary', size: 's' }
												}
											},
											{
												block: 'image',
												mix: { block: 'pt-card', elem: 'image' },
												url: '/assets/ufc.jpg'
											},	
											{
												elem: 'info',
												mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 's', 'space-t': 's', } },
												content: [
													{
														elem: 'name',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 'l', weight: 'bold' },
																content: 'UFC'
															}
														]
													},
													{
														elem: 'price',
														content: [
															{
																block: 'text',
																mods: { view:'primary', size: 's' },
																content: 'turn-based RPG developed by Airship Syndicate and published by THQ Nordic'
															}
														]
													}
												]
											},
											{
												elem: 'footer',
												mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
												content: {
													block: 'tag',
													mods: { view: 'default', size: 's' },
													content: 'Role-playing'
												}
											}
										]
									}
									/* /Product */

								]
							},
							{
								block: 'tpl-grid',
								attrs: { style: 'margin-top: 60px; margin-bottom: 60px;'},
								mods: { 'xs-columns': '3', 's-columns': '6', 'm-columns': '12', 'col-gap': 'full', 'row-gap': 'full' },
								content: [
									{
										elem: 'fraction',
										elemMods: { 'xs-col': '3', 's-col': '6', 'm-col': '7', 'l-col': '7', 's-row': '2' },
										content: [

											/* History */
											{
												block: 'history',
												// mix: { block: 'pt-list', mods: { view: 'default', border: 'all' }},
												content: [
													{
														elem: 'transaction',
														// mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
														content: [
															{
																elem: 'destination',
																// mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																content: [
																	{
																		elem: 'pic',
																		// mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																		content: [
																			{
																				block: 'brand-logo',
																				mods: { name: 'megafon', size: 'm' }
																			}
																		]
																	},
																	{
																		elem: 'label',
																		// mix: { block: 'pt-icon-plus', elem: 'block' },
																		content: [
																			{
																				block: 'text',
																				mods: { view:'primary', size: 'l' },
																				content: '+7 921 890 84 64'
																			}
																		]
																	}
																]
															},
															{
																elem: 'price',
																// mix: { block: 'pt-icon-plus', elem: 'block' },
																content: [
																	{
																		block: 'text',
																		mods: { view:'primary', size: 'l', weight: 'bold' },
																		content: '1000 ₽'
																	}
																]
															}
														]
													},
													{
														elem: 'transaction',
														// mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
														content: [
															{
																elem: 'destination',
																// mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																content: [
																	{
																		elem: 'pic',
																		// mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																		content: [
																			{
																				block: 'brand-logo',
																				mods: { name: 'yota', size: 'm' }
																			}
																		]
																	},
																	{
																		elem: 'label',
																		// mix: { block: 'pt-icon-plus', elem: 'block' },
																		content: [
																			{
																				block: 'text',
																				mods: { view:'primary', size: 'l' },
																				content: '+7 921 890 84 64'
																			}
																		]
																	}
																]
															},
															{
																elem: 'price',
																// mix: { block: 'pt-icon-plus', elem: 'block' },
																content: [
																	{
																		block: 'text',
																		mods: { view:'primary', size: 'l', weight: 'bold'  },
																		content: '1000 ₽'
																	}
																]
															}
														]
													},
													{
														elem: 'transaction',
														// mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
														content: [
															{
																elem: 'destination',
																// mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																content: [
																	{
																		elem: 'pic',
																		// mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																		content: [
																			{
																				block: 'brand-logo',
																				mods: { name: 'kcell', size: 'm' }
																			}
																		]
																	},
																	{
																		elem: 'label',
																		// mix: { block: 'pt-icon-plus', elem: 'block' },
																		content: [
																			{
																				block: 'text',
																				mods: { view:'primary', size: 'l' },
																				content: '+7 921 890 84 64'
																			}
																		]
																	}
																]
															},
															{
																elem: 'price',
																// mix: { block: 'pt-icon-plus', elem: 'block' },
																content: [
																	{
																		block: 'text',
																		mods: { view:'primary', size: 'l', weight: 'bold'  },
																		content: '1000 ₽'
																	}
																]
															}
														]
													},
													{
														elem: 'transaction',
														// mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
														content: [
															{
																elem: 'destination',
																// mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																content: [
																	{
																		elem: 'pic',
																		// mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																		content: [
																			{
																				block: 'brand-logo',
																				mods: { name: 'mts', size: 'm' }
																			}
																		]
																	},
																	{
																		elem: 'label',
																		// mix: { block: 'pt-icon-plus', elem: 'block' },
																		content: [
																			{
																				block: 'text',
																				mods: { view:'primary', size: 'l' },
																				content: '+7 921 890 84 64'
																			}
																		]
																	}
																]
															},
															{
																elem: 'price',
																// mix: { block: 'pt-icon-plus', elem: 'block' },
																content: [
																	{
																		block: 'text',
																		mods: { view:'primary', size: 'l', weight: 'bold' },
																		content: '1000 ₽'
																	}
																]
															}
														]
													},
													{
														elem: 'transaction',
														// mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
														content: [
															{
																elem: 'destination',
																// mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																content: [
																	{
																		elem: 'pic',
																		// mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																		content: [
																			{
																				block: 'brand-logo',
																				mods: { name: 'tele2', size: 'm',  weight: 'bold' }
																			}
																		]
																	},
																	{
																		elem: 'label',
																		// mix: { block: 'pt-icon-plus', elem: 'block' },
																		content: [
																			{
																				block: 'text',
																				mods: { view:'primary', size: 'l' },
																				content: '+7 921 890 84 64'
																			}
																		]
																	}
																]
															},
															{
																elem: 'price',
																// mix: { block: 'pt-icon-plus', elem: 'block' },
																content: [
																	{
																		block: 'text',
																		mods: { view:'primary', size: 'l', weight: 'bold'  },
																		content: '1000 ₽'
																	}
																]
															}
														]
													}
										
												]
											}
											/* /History */

										]
									},
									{
										elem: 'fraction',
										elemMods: { 'xs-col': '3', 's-col': '6', 'm-col': '5', 'l-col': '5' },
										content: [

											/* Commerial */
											{
												block: 'commercial',
												mix: [
													// { block: 'pt-card', mods: { view: 'default' }},
													{ block: 'theme', mods: { color: 'whitepaper-brand' }}
												],
												content: [
													{
														elem: 'content',
														// mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' }},
														content: [
															{
																elem: 'preview',
																content: [
																	{
																		block: 'image',
																	}
																]
															},
															{
																elem: 'description',
																content: [
																	{
																		block: 'text',
																		mods: { view: 'primary', size: 'm' },
																		content: 'С Золотым статусом Xbox Live Gold вы получите доступ к многопользовательскому режиму в играх'
																	}
																]
															}
														]
													},
													{
														elem: 'nav',
														// mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'center' }},
														content: [
															{
																elem: 'unit',
																content: [
																	{
																		elem: 'dots',
																		content: [
																			{
																				elem: 'alignwrap',
																				content: [
																					{
																						elem: 'dot',
																						tag: 'span'
																					},
																					{
																						elem: 'dot',
																						tag: 'span'
																					},
																					{
																						elem: 'dot',
																						tag: 'span'
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
											/* /Commercial */

										]
									},
									{
										elem: 'fraction',
										elemMods: { 'xs-col': '3', 's-col': '6', 'm-col': '5', 'l-col': '5' },
										content: [
											{
												block: 'rectangle',
												attrs: { style: 'background: black; width: 100%; height: 150px; min-height: 100%;' },
												content: [
													{
														block: 'badge',
														mods: { view: 'warning' },
														content: 'идентифицированный'
													}
												]
											}
										]
									}
								]
							}
						]
					}
				}
			]
		}
	]
};
