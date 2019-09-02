import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	.flex {
		display: flex;
	}
`;
export const Iconfont = createGlobalStyle`
	@font-face {
		font-family: 'iconfont';  /* project id 810881 */
		src: url('//at.alicdn.com/t/font_810881_vdsmyx7br89.eot');
		src: url('//at.alicdn.com/t/font_810881_vdsmyx7br89.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_810881_vdsmyx7br89.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_810881_vdsmyx7br89.woff') format('woff'),
		url('//at.alicdn.com/t/font_810881_vdsmyx7br89.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_810881_vdsmyx7br89.svg#iconfont') format('svg');
	}
	.iconfont {
			font-family:"iconfont" !important;
			font-size: 16px;
			font-style: normal;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
	}
	.icon-sousuo:before {
			content:"\\e62a";
	}
	.icon-zuanshi:before {
			content:"\\e675";
	}
	.icon-beta:before {
			content:"\\e64c";
	}
	.icon-zhinanzhen:before {
			content:"\\e7d7";
	}
	.icon-generate_pictures:before {
			content:"\\e685";
	}
	.icon-ic_pic:before {
			content:"\\e66e";
	}
	.icon-yumaobi:before {
			content:"\\e616";
	}
	.icon-xiazai:before {
			content:"\\e61a";
	}
	.icon-ic_gonggao:before {
			content:"\\e6a4";
	}
	.icon-Stone-arrow-dropdown:before {
			content:"\\e845";
	}
	.icon-huanyipi:before {
    content:"\\e65e";
	}
	.icon-zuanshi1:before {
    content:"\\e602";
	}
	.icon-xihuan:before {
    content:"\\e637";
	}
	.icon-iconfontconment:before {
    content:"\\e604";
  }
  .icon-xiangyoujiantou:before {
    content:"\\e613";
 	}
`;