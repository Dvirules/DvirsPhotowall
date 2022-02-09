import React from 'react'
import Main from './Main'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Redux/reducers'
import {Provider} from 'react-redux'
import App from './app'
import thunk from 'redux-thunk'
import { database } from './database/config'

<link href="//db.onlinewebfonts.com/c/6d32b8e06f40fb7698cfb714b9e7975d?family=BillabongW00-Regular" rel="stylesheet" type="text/css"/>
                    //The reducer functions        //the config for the redux devtools                        //the config for thunk which allows us to return function inside of action creators
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><BrowserRouter basename='/'><App/></BrowserRouter></Provider>, document.getElementById('root'))
//App repalces Main in lecture 48 (app is like Main only that it is connected to the Redux's store)