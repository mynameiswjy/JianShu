import React, {Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {GlobalStyled, Iconfont} from './style';
import Header from './common/header'
import Home from './pages/index'
import Detail from './pages/detail'

function App() {
  return (
    <Fragment>
			<GlobalStyled />
			<Iconfont />
			<Header></Header>
			<BrowserRouter>
				<Route path='/' exact component={Home}></Route>
				<Route path='/detail' exact component={Detail}></Route>
			</BrowserRouter>
    </Fragment>
  );
}

export default App;
