import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import Desk from './pages/workDesk/workdesk'
import Plan from './pages/bills/plan'
import Check from './pages/bills/check'
import Customs from './pages/bills/customs'
import Baseform from './pages/form/baseform'
import Login from './pages/form/login'
import Register from './pages/form/register'
import BaseSelect from './pages/select/baseSelect'
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
            <Route path="/form/baseform" component={Baseform} />
            <Route path="/form/login" component={Login} />
            <Route path="/form/register" component={Register} />
            <Route path="/select/baseselect" component={BaseSelect} />
            <Route component={NoMatch} /> 
          </Switch>
        </App>
      </Router> 
    )  
  }
}