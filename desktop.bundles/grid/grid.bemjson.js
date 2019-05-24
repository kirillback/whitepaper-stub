module.exports = {
	block: 'page',
	title: 'Grid',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'grid.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'grid.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', breakpoint: 'default', font: 'ibm' }
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
								block: 'tpl-grid',
								mods: { 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full' },
								content: [
									{
										block: 'rectangle',
										attrs: { style: 'background: #555; width: 100%; height: 398px;' }
									},
									{
										block: 'rectangle',
										attrs: { style: 'background: #555; width: 100%; height: 398px;' }
									}
								]
							},
							{
								block: 'tpl-grid',
								attrs: { style: 'margin-top: 60px;'},
								mods: { 's-ratio': '1-1', 'm-ratio': '1-1-1', 'l-ratio': '1-1-1-1', 'col-gap': 'full', 'row-gap': 'full' },
								content: [
									{
										block: 'rectangle',
										attrs: { style: 'background: #555; width: 100%; height: 398px;' }
									},
									{
										block: 'rectangle',
										attrs: { style: 'background: #555; width: 100%; height: 398px;' }
									},
									{
										block: 'rectangle',
										attrs: { style: 'background: #555; width: 100%; height: 398px;' }
									},
									{
										block: 'rectangle',
										attrs: { style: 'background: #555; width: 100%; height: 398px;' }
									}
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
											{
												block: 'rectangle',
												attrs: { style: 'background: #666; width: 100%; height: 600px;' }
											}
										]
									},
									{
										elem: 'fraction',
										elemMods: { 'xs-col': '3', 's-col': '6', 'm-col': '5', 'l-col': '5' },
										content: [
											{
												block: 'rectangle',
												attrs: { style: 'background: #555; width: 100%; height: 150px; min-height: 100%;' }
											}
										]
									},
									{
										elem: 'fraction',
										elemMods: { 'xs-col': '3', 's-col': '6', 'm-col': '5', 'l-col': '5' },
										content: [
											{
												block: 'rectangle',
												attrs: { style: 'background: #555; width: 100%; height: 150px; min-height: 100%;' }
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
