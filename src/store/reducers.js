import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/index/store/reducer'

export default combineReducers({
	header: headerReducer,
	homePage: homeReducer
})