import styled from 'styled-components'

export const HeaderWrap = styled.div`
	border-bottom: 1px solid #f0f0f0;
	width: 100%;
`
export const HeaderContent = styled.div`
	height: 56px;
	//background-color: #bfa;
	min-width: 768px;
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
	display: flex;
	font-size: 17px;
`

export const LogoImg = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background-image: url("https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png");
	background-size: contain;
	background-repeat: no-repeat;
`

export const HeaderUI = styled.ul`
	max-width: 66%;
	flex: 1;
	height: 56px;
	margin: 0 auto;
`
export const HeadItem = styled.li`
	&.left {
		float: left;
	}
	&.right {
		float: right;
	}
	&.active {
	  color: #ea6f5a;
	}
	line-height: 26px;
	padding: 15px;
	margin-right: 10px;
	color: #333;
`;

export const InputWrap = styled.div`
	height: 38px;
	margin-top: 9px;
	padding: 0 2px 0 20px;
	font-size: 14px;
	border: 1px solid #eee;
	border-radius: 40px;
	background: #eee;
	box-sizing: border-box;
	float: left;
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 9;
`;

export const SearchInfo = styled.div`
	position: absolute;
	top: 38px;
	left: 0;
	width: 250px;
	box-sizing: border-box;
	padding: 20px 20px 20px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  margin-top: 9px;
`

export const HotSearch = styled.div`
	font-size: 14px;
  color: #969696;
  display: flex;
  justify-content: space-between;
`

export const SearchSwich = styled.a`
	cursor: pointer;
	-moz-user-select:none;/*火狐*/
	-webkit-user-select:none;/*webkit浏览器*/
	-ms-user-select:none;/*IE10*/
	-khtml-user-select:none;/*早期浏览器*/
	user-select:none;
`

export const SearchList = styled.ul`
	margin-top: 10px;
`
export const SearchItem = styled.li`
	  margin-right: 10px;
	  margin-top: 10px;
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 3px;
`

export const HeadInput = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 180px;
	outline: none;
	background: #eee;
	height: 100%;
	border: none;
	&::placeholder {
		color: #999;
	}
	&.focuse {
		width: 230px;
	}
	&.slider-enter {
		transition: all .2s ease-out;
	}
	&.slider-enter-active {
		width: 230px;
	}
	&.slider-exit {
		transition: all .2s ease-out;
	}
	&.slider-exit-active {
	width: 180px;
	}
`
export const Headright = styled.div`
	position: absolute;
	right: 40px;
`

export const Rightbtn = styled.a`
	display: inline-block;
	padding: 11px 20px;
	margin: 9px 5px 0 15px;
	border: 1px solid rgba(236,97,73,.7);
	border-radius: 20px;
	font-size: 15px;
	color: #ea6f5a;
	box-sizing: border-box;
	background-color: transparent;
	&.bg {
		background-color: #ea6f5a;
		color: #fff;
	}
`