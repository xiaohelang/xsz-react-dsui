import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import Desk from './pages/workDesk/workdesk'

export default class HRouter extends React.Component{
  render() {
    return (
      <Router>
        <App>
         <Route path="/home" component={Desk}></Route>
        </App>
      </Router> 
    )  
  }
}