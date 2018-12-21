import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import Desk from './pages/workDesk/workdesk'
import Plan from './pages/bills/plan'
import Check from './pages/bills/check'
import Customs from './pages/bills/customs'
import NoMatch from './pages/nomatch'

export default class HRouter extends React.Component{
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/home" component={Desk}></Route>
            <Route path="/bills/plan" component={Plan} />
            <Route path="/bills/check" component={Check} />
            <Route path="/bills/customs" component={Customs} />
            <Route component={NoMatch} /> 
          </Switch>
        </App>
      </Router> 
    )  
  }
}