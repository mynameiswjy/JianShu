import * as types from './actionsTypes'
import axios from 'axios'

const hotKWactions = (data) => ({
	type: types.HOT_KEY_WORDS,
	data
})

export const focusChange = () => ({
	type: types.FOCUS_CHANGE
})

export const bulrChange = () => ({
	type: types.BULR_CHANGE
})

export const mouseEnter = () => ({
	type: types.MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: types.MOUSE_LEAVE
})

export const nextPage = () => ({
	type: types.NEXT_PAGE
})

export const hotKeywords = () => {
	return (dispatch) => {
		axios.get('/api/hotKeywords.json').then((res) => {
			dispatch(hotKWactions(res.data.data))
		})
	}
}