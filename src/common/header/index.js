import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {focusChange, bulrChange, hotKeywords, mouseEnter, mouseLeave, nextPage} from './store/createActions'
import {
	HeaderWrap,
	HeaderContent,
	LogoImg,
	HeaderUI,
	HeadItem,
	InputWrap,
	HeadInput,
	Headright,
	Rightbtn,
	SearchInfo,
	HotSearch,
	SearchSwich,
	SearchList,
	SearchItem
} from './style'

/*const Header = () => {

}*/

class Header extends React.Component {
	render() {
		const {focused, hotList, mouseIn, hotPage, focusChange, bulrChange, searchInfoEnter, searchInfoLeave, nextPage} = this.props
		const search = {
			fontSize: '20px',
			lineHeight: '34px',
			marginTop: '2px',
			color: focused ? '#FAFAFA' : '#999',
			width: '34px',
			height: '34px',
			backgroundColor: focused ? '#969696' : '',
			borderRadius: '17px',
			textAlign: 'center'
		}
		const huanyipiIcon = {
			fontSize: '12px',
			marginRight: '3px',
			transition: 'all .2s ease-in',
			transformOrigin: 'center center',
			width: '12px',
			height: '12px',
			display: 'inline-block'
		}
		let pageList = []
		if (hotList.length) {
			for (let i = (hotPage - 1) * 10; i < hotPage * 10; i++) {
				pageList.push(hotList[i] ? <SearchItem key={hotList[i]}>{hotList[i]}</SearchItem> : null)
			}
		}
		const searchInfo = (show = false) => {
			if (show || mouseIn) {
				return (
					<SearchInfo onMouseEnter={searchInfoEnter} onMouseLeave={searchInfoLeave}>
						<HotSearch>
							<span>热门搜索</span>
							<SearchSwich onClick={() => nextPage(this.animateRef)}>
								<i ref={(e) => {this.animateRef = e}} className="iconfont icon-huanyipi" style={huanyipiIcon}></i>
								换一批
							</SearchSwich>
						</HotSearch>
						<SearchList>
							{pageList}
						</SearchList>
					</SearchInfo>
				)
			}
		}
		return (
			<HeaderWrap>
				<HeaderContent>
					<LogoImg href="/"/>
					<HeaderUI>
						<HeadItem className="left active"><i className="iconfont icon-zhinanzhen" style={{fontSize: '17px',marginRight: '3px'}}></i>首页</HeadItem>
						<HeadItem className="left"><i className="iconfont icon-xiazai" style={{marginRight: '3px',fontSize: '17px'}}></i>下载App</HeadItem>
						<InputWrap>
							<CSSTransition in={focused} timeout={200} classNames="slider">
								<HeadInput
									onFocus={() => focusChange(hotList.length)}
									onBlur={bulrChange}
									className={focused ? 'focuse' : ''}/>
							</CSSTransition>
							<i className="iconfont icon-sousuo" style={search}></i>
							{
								searchInfo(focused)
							}
						</InputWrap>
						<HeadItem className="right">登录</HeadItem>
						<HeadItem className="right">
							<i className="iconfont icon-zuanshi" style={{fontSize: '26px', fontWeight: '600', color: '#ea6f5a'}}></i>
							<i className="iconfont icon-beta" style={{fontSize: '35px', color: '#ea6f5a'}}></i>
						</HeadItem>
						<HeadItem className="right">Aa</HeadItem>
					</HeaderUI>
					<Headright>
						<Rightbtn>注册</Rightbtn>
						<Rightbtn className="bg"><i style={{marginRight: '3px'}} className="iconfont icon-yumaobi"></i>写文章</Rightbtn>
					</Headright>
				</HeaderContent>
			</HeaderWrap>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.header.focused,
		hotList: state.header.list,
		hotPage: state.header.hotPage,
		mouseIn: state.header.mouseIn
	}
}
let num = 1
const mapDispatchToprops = (dispatch) => {
	return {
		focusChange(len) {
			if (!len) {
				dispatch(hotKeywords())
			}
			dispatch(focusChange())
		},
		bulrChange() {
			dispatch(bulrChange())
		},
		searchInfoEnter() {
			dispatch(mouseEnter())
		},
		searchInfoLeave() {
			dispatch(mouseLeave())
		},
		nextPage(e) {
			num++
			e.style.transform = 'rotate(' + num * 180 + 'deg)'
			dispatch(nextPage())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToprops)(Header)