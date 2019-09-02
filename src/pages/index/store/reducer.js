import * as types from './actionTypes'

const initState = {
	"bannerList": [
		{"img": "https://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540", "id": 0},
		{"img": "https://upload.jianshu.io/admin_banners/web_images/4688/d3b4622796060f4f4ca58fcc03ddb4d19bd422ed.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540", "id": 1},
		{"img": "https://upload.jianshu.io/admin_banners/web_images/4698/a5988a97c54f6fad9e080cea83106f3989a4e745.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540", "id": 2},
		{"img": "https://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540", "id": 3}
	],
	"newsList": [],
	"recommendList": [],
	isTopBtn: false
}

export default (state = initState, action) => {
	const newState = JSON.parse(JSON.stringify(state))
	switch (action.type) {
		case types.INDEX_DATA:
			const {recommendList, newsList} = action.data
			newState.recommendList = recommendList
			newState.newsList = newsList
			// newState.bannerList = bannerList
			return newState
		case types.OPEN_TOP_BTN:
			newState.isTopBtn = action.value
			return newState
		default:
			return state
	}
}