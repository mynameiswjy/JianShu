import React, {Component} from 'react'
import {
	AuthorsWrap
} from '../style'

class Authors extends Component {
	render() {
		return (
			<AuthorsWrap>
				<div className="author_title">
					<p>推荐的作者</p>
					<a href="#" className="batch">换一批</a>
				</div>
			</AuthorsWrap>
		)
	}
}

export default Authors