import * as types from './actionTypes'
import axios from 'axios'

const indexAction = (data) => ({
	type: types.INDEX_DATA,
	data
})

export const isOpenTopbtn = (value) => ({
	type: types.OPEN_TOP_BTN,
	value
})

export const indexDataAction = () => {
	return (dispatch) => (
		axios.get('/api/indexData.json').then(res => {
			dispatch(indexAction(res.data))
		})
	)
}
