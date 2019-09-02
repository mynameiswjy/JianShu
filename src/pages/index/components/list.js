import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
	Newslist,
	ListItem,
	ListitemLeft,
	ListitemRight,
	ItemLeftBott
} from '../style'

class Homelist extends React.Component {
	render() {
		const {newsList} = this.props
		return (
			<Newslist>
				{
					newsList.map((item, index) => (
						<ListItem key={index}>
							<ListitemLeft>
								<Link className="h2" to={{pathname: '/detail', query: {name: 'sunny123'}}}>{item.title}</Link>
								<p className="p">{item.introduce}</p>
								<ItemLeftBott>
									<p className="p1">
										<i className="iconfont icon-zuanshi1" style={{fontSize: '14px'}}></i>
										{item.coe}
									</p>
									<a className="a2">{item.userName}</a>
									<p className="p3">
										<i className="iconfont icon-iconfontconment" style={{fontSize: '14px', marginRight: '3px'}}></i>
										{item.comment}
									</p>
									<p className="p3">
										<i className="iconfont icon-xihuan" style={{fontSize: '14px', marginRight: '3px'}}></i>
										{item.enjoy}
									</p>
								</ItemLeftBott>
							</ListitemLeft>
							<ListitemRight>
								<img
									src={item.image}
									alt=""
								/>
							</ListitemRight>
						</ListItem>
					))
				}
				<div className="read_more">阅读更多</div>
			</Newslist>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		newsList: state.homePage.newsList
	}
}

export default connect(mapStateToProps, null)(Homelist)