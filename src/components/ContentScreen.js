import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import All from './categories/All'
import Science from './categories/Science'
import Business from './categories/Business'
import Politics from './categories/Politics'
import Sports from './categories/Sports'

const ContentScreen = props => {
    return (
        
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/politics">
                <Politics politics={props.politics} onSignout={props.onSignout}/>
              </Route>
              <Route path="/sports">
                <Sports sports={props.sports} onSignout={props.onSignout}/>
              </Route>
              <Route path="/business">
                <Business business={props.business} onSignout={props.onSignout}/>
              </Route>
              <Route path="/science">
                <Science science={props.science} onSignout={props.onSignout}/>
              </Route>
              <Route path="/">
                <All articles={props.articles} onSignout={props.onSignout}/>
              </Route>
            </Switch>
          </div>
        </Router>
    )
}

export default ContentScreen