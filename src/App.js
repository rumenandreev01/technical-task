import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import CoinDetails  from './CoinDetails';
import { CoinList } from './CoinList';


function App() {
  return (
    <div>        
        <Router>
          <Switch>
            <Route exact path="/">
              <CoinList />
            </Route>
            <Route exact path="/:id">
              <CoinDetails/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
  
}

export default App;
