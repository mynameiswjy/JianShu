import * as types from './actionsTypes'

const initState = {
	focused: false,
	mouseIn: false,
	list: [],
	hotPage: 1
};

export default (state = initState, action) => {
	const newStates = JSON.parse(JSON.stringify(state))
	switch (action.type) {
		case types.BULR_CHANGE:
			newStates.focused = false;
			return newStates;
		case types.FOCUS_CHANGE:
			newStates.focused = true;
			return newStates;
		case types.HOT_KEY_WORDS:
			newStates.list = action.data;
			return newStates;
		case types.MOUSE_ENTER:
			newStates.mouseIn = true;
			return newStates;
		case types.MOUSE_LEAVE:
			newStates.mouseIn = false;
			return newStates;
		case types.NEXT_PAGE:
			newStates.hotPage++;
			const len = Math.ceil(newStates.list.length / 10)
			if (newStates.hotPage > len) {
				newStates.hotPage = 1
			}
			return newStates;
		default:
				return state
	}
}