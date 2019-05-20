module.exports = {
	block: 'page',
	title: 'Hello page!!',
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
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'ibm' }
	},
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
								elem: 'container',
								elemMods: { size: 'm', align: 'center' },
								content: [
									{
										block: 'tpl-grid',
										mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full' },
										content: [

											/* Payment */
											{
												block: 'payment',
												mix: { block: 'pt-form', mods: { border: 'all' }},
												content: [
													{
														elem: 'header',
														mix: { 
															block: 'pt-form',
															elem: 'item',
															elemMods: { 'space-v': 'l', 'space-h': 'xl', border: 'bottom' }
														},
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
														mix: { 
															block: 'pt-form',
															elem: 'item',
															elemMods: { 'space-v': 'xxxl', 'space-h': 'xl', border: 'bottom' }
														},
														content: [
															{
																elem: 'item',
																mix: { 
																	block: 'pt-form',
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl', distribute: 'between', 'vertical-align': 'center' }
																},
																content: [
																	{
																		elem: 'label',
																		mix: { 
																			block: 'pt-form',
																			elem: 'label',
																			elemMods: { width: 'default' },
																		},
																		content: [
																			{
																				block: 'text',
																				mods: { view:'primary', size: 'l' },
																				content: 'Телефон'
																			}
																		]
																	},
																	{
																		block: 'example-input',
																		mods: { 'size': 'l' }
																	}
																]
															},
															{
																elem: 'item',
																mix: { 
																	block: 'pt-form',
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl', distribute: 'between', 'vertical-align': 'center' }
																},
																content: [
																	{
																		elem: 'label',
																		mix: { 
																			block: 'pt-form',
																			elem: 'label',
																			elemMods: { width: 'default' },
																		},
																		content: [
																			{
																				block: 'text',
																				mods: { view:'primary', size: 'l' },
																				content: 'Сумма'
																			}
																		]
																	},
																	{
																		block: 'example-input',
																		mods: { 'size': 'l' }
																	}
																]
															}
														]
													},
													{
														elem: 'footer',
														mix: { 
															block: 'pt-form',
															elem: 'item',
															elemMods: { distribute: 'between', border: 'bottom', 'vertical-align': 'center', 'space-v': 'l',  'space-h': 'xl' },
														},
														content: [
															{
																block: 'text',
																mods: { view:'ghost', size: 'l' },
																content: 'Дополнительная подсказка'
															},
															{
																block: 'example-button',
																mods: { 'size': 'l' }
															}
														]
													}
												]
											},
											/* /Payment */

											/* Warning */
											{
												block: 'warning',
												mix: [
													{ block: 'theme', mods: { color: 'whitepaper-warning' }},
													{ block: 'pt-informer', mods: { view: 'default', border: 'all' }},
												],
												attrs: { 'style': 'background: #FF9400; '},
												content: [
													{
														elem: 'content',
														mix: { block: 'pt-informer', elem: 'content', elemMods: { distribute: 'center', 'space-a': 'xxl' }},
														content: [
															{
																elem: 'col',
																content: [
																	{
																		elem: 'placeholder',
																		content: [
																			{
																				block: 'placeholder',
																				mods: { view: 'primary', size: 'm' }
																			}
																		]
																	},
																	{
																		elem: 'description',
																		content: [
																			{
																				block: 'text',
																				mods: { view: 'primary', size: 'xl', align: 'center' },
																				content: 'Данный серсис использует cookies для того чтобы сформировать контент наболее подходящий для ваших задач.'
																				// content: 'This website uses cookies to offer you the most relevant information. Please accept cookies for optimal performance'
																			}
																		]
																	}
																]
															}
														]
													},
													{
														elem: 'action',
														mix: { block: 'pt-informer', elem: 'action', elemMods: { 'space-a': 'xl' }},
														content: [
															{
																block: 'text',
																mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold', spacing: 's', transform: 'uppercase' },
																content: 'Узнать подробности'
															}
														]
													}
												]
											}
											/* /Warning */

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
												mix: { block: 'pt-card', mods: { view: 'default' }},
												content: [
													{
														elem: 'content',
														mix: { block: 'pt-card', elem: 'content' },
														content: [
															{
																elem: 'image',
																elemMods: { view: 'minecraft' }
															}
														]
													},
													{
														elem: 'footer',
														mix: { block: 'pt-card', elem: 'footer' },
														content: [
															{
																elem: 'info',
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
																				mods: { view:'primary', size: 'l' },
																				content: '32 000 ₽'
																			}
																		]
																	}
																]
															}
														]
													}
												]
											},
											/* /Product */

											/* Product */
											{
												block: 'product',
												mix: { block: 'pt-card', mods: { view: 'default' }},
												content: [
													{
														elem: 'content',
														mix: { block: 'pt-card', elem: 'content' },
														content: [
															{
																elem: 'image',
																elemMods: { view: 'nightwar' }
															}
														]
													},
													{
														elem: 'footer',
														mix: { block: 'pt-card', elem: 'footer' },
														content: [
															{
																elem: 'info',
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
																				mods: { view:'primary', size: 'l' },
																				content: '32 000 ₽'
																			}
																		]
																	}
																]
															}
														]
													}
												]
											},
											/* /Product */

											/* Product */
											{
												block: 'product',
												mix: { block: 'pt-card', mods: { view: 'default' }},
												content: [
													{
														elem: 'content',
														mix: { block: 'pt-card', elem: 'content' },
														content: [
															{
																elem: 'image',
																elemMods: { view: 'rayman' }
															}
														]
													},
													{
														elem: 'footer',
														mix: { block: 'pt-card', elem: 'footer' },
														content: [
															{
																elem: 'info',
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
																				mods: { view:'primary', size: 'l' },
																				content: '32 000 ₽'
																			}
																		]
																	}
																]
															}
														]
													}
												]
											},
											/* /Product */

											/* Product */
											{
												block: 'product',
												mix: { block: 'pt-card', mods: { view: 'default' }},
												content: [
													{
														elem: 'content',
														mix: { block: 'pt-card', elem: 'content' },
														content: [
															{
																elem: 'image',
																elemMods: { view: 'redemption' }
															}
														]
													},
													{
														elem: 'footer',
														mix: { block: 'pt-card', elem: 'footer' },
														content: [
															{
																elem: 'info',
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
																				mods: { view:'primary', size: 'l' },
																				content: '32 000 ₽'
																			}
																		]
																	}
																]
															}
														]
													}
												]
											},
											/* /Product */

											/* Product */
											{
												block: 'product',
												mix: { block: 'pt-card', mods: { view: 'default' }},
												content: [
													{
														elem: 'content',
														mix: { block: 'pt-card', elem: 'content' },
														content: [
															{
																elem: 'image',
																elemMods: { view: 'ufc' }
															}
														]
													},
													{
														elem: 'footer',
														mix: { block: 'pt-card', elem: 'footer' },
														content: [
															{
																elem: 'info',
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
																				mods: { view:'primary', size: 'l' },
																				content: '32 000 ₽'
																			}
																		]
																	}
																]
															}
														]
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
														mix: { block: 'pt-list', mods: { view: 'default', border: 'all' }},
														content: [
															{
																elem: 'transaction',
																mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
																content: [
																	{
																		elem: 'destination',
																		mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																		content: [
																			{
																				elem: 'pic',
																				mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																				content: [
																					{
																						block: 'brand-logo',
																						mods: { name: 'megafon', size: 'm' }
																					}
																				]
																			},
																			{
																				elem: 'label',
																				mix: { block: 'pt-icon-plus', elem: 'block' },
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
																		mix: { block: 'pt-icon-plus', elem: 'block' },
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
																mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
																content: [
																	{
																		elem: 'destination',
																		mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																		content: [
																			{
																				elem: 'pic',
																				mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																				content: [
																					{
																						block: 'brand-logo',
																						mods: { name: 'yota', size: 'm' }
																					}
																				]
																			},
																			{
																				elem: 'label',
																				mix: { block: 'pt-icon-plus', elem: 'block' },
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
																		mix: { block: 'pt-icon-plus', elem: 'block' },
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
																mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
																content: [
																	{
																		elem: 'destination',
																		mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																		content: [
																			{
																				elem: 'pic',
																				mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																				content: [
																					{
																						block: 'brand-logo',
																						mods: { name: 'kcell', size: 'm' }
																					}
																				]
																			},
																			{
																				elem: 'label',
																				mix: { block: 'pt-icon-plus', elem: 'block' },
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
																		mix: { block: 'pt-icon-plus', elem: 'block' },
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
																mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
																content: [
																	{
																		elem: 'destination',
																		mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																		content: [
																			{
																				elem: 'pic',
																				mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																				content: [
																					{
																						block: 'brand-logo',
																						mods: { name: 'mts', size: 'm' }
																					}
																				]
																			},
																			{
																				elem: 'label',
																				mix: { block: 'pt-icon-plus', elem: 'block' },
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
																		mix: { block: 'pt-icon-plus', elem: 'block' },
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
																mix: { block: 'pt-list', elem: 'item', elemMods: { border: 'bottom', 'space-v': 'm', 'space-h': 'l', 'vertical-align': 'center', distribute: 'between' }},
																content: [
																	{
																		elem: 'destination',
																		mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' }},
																		content: [
																			{
																				elem: 'pic',
																				mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' }},
																				content: [
																					{
																						block: 'brand-logo',
																						mods: { name: 'yota', size: 'm',  weight: 'bold' }
																					}
																				]
																			},
																			{
																				elem: 'label',
																				mix: { block: 'pt-icon-plus', elem: 'block' },
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
																		mix: { block: 'pt-icon-plus', elem: 'block' },
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
															{ block: 'pt-card', mods: { view: 'default' }},
															{ block: 'theme', mods: { color: 'whitepaper-brand' }}
														],
														content: [
															{
																elem: 'content',
																mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' }},
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
																mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'center' }},
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
														attrs: { style: 'background: var(--color-bg-brand); width: 100%; height: 150px; min-height: 100%;' }
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
