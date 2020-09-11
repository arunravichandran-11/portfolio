import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './app.scss';

import AbComponent from './BaseComponents/ab.component';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/arun-ravichandran-1101' />
          </Route>
          <Route path='/arun-ravichandran-1101'>
            <AbComponent />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
