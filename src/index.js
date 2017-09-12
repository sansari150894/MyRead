import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import $ from 'jquery'

ReactDOM.render(
    <BrowserRouter><App userAgent={window.navigator.userAgent} /></BrowserRouter>
    , document.getElementById('root')
)
