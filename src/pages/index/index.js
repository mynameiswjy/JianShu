import React, { Component } from 'react'
import ReactSwipe from 'react-swipe';
import { connect } from 'react-redux';
import { indexDataAction, isOpenTopbtn } from './store/createActions'
import Homelist from './components/list'
import Recomment from './components/recommend'
import DownloadApp from './components/downloadApp'
import Authors from './components/authors'
import {
	HomeWrap,
	SwiperWrap
} from './style'


class Home extends Component {
	render() {
		const {bannerList, backTop, isTopBtn} = this.props
		return (
			<HomeWrap>
				<div className="index_left">
					<SwiperWrap>
						<ReactSwipe
							className="swiper_wrap"
							swipeOptions={{ continuous: true, auto: 5000 }}
							ref={el => (this.reactSwipeEl = el)}
						>
							{
								bannerList.map(item => (<img className="home_banner" key={item.id} src={item.img} alt=""/>))
							}
						</ReactSwipe>
						<div className="common-swiper-style left" onClick={() => this.reactSwipeEl.prev()}>《</div>
						<div className="common-swiper-style right" onClick={() => this.reactSwipeEl.next()}>》</div>
					</SwiperWrap>
					<Homelist />
				</div>
				<div className="index_right">
					<Recomment />
					<DownloadApp />
					<Authors />
				</div>
				{
					isTopBtn ? <div className="back_top" onClick={backTop}>TOP</div> : null
				}
			</HomeWrap>
		)
	}

	componentDidMount() {
		this.props.changeIndexData()
		window.addEventListener('scroll', this.props.listenScroll)
	}
}

const mapStateToProps = (state) => {
	return {
		bannerList: state.homePage.bannerList,
		isTopBtn: state.homePage.isTopBtn
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeIndexData() {
			dispatch(indexDataAction())
		},
		backTop() {
			window.scrollTo(0, 0)
		},
		listenScroll() {
			if (document.documentElement.scrollTop > 100) {
				dispatch(isOpenTopbtn(true))
			} else {
				dispatch(isOpenTopbtn(false))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)