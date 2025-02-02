import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './store'

const Index = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(Index, document.getElementById('root'));
