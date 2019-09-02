import React from 'react'
import { connect } from 'react-redux'
import {
	RecommendList,
	RecItem
} from '../style'

const Recommend = ({recommendList}) => (
	<RecommendList>
		{
			recommendList.map(item => (
				<RecItem key={item.id}>
					<img className="RecItem_img" src={item.img} alt=""/>
				</RecItem>
			))
		}
	</RecommendList>
)

const mapStateToProps = (state) => {
	return {
		recommendList: state.homePage.recommendList
	}
}

export default connect(mapStateToProps, null)(Recommend)