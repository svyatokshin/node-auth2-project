import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path ='/'>
        <Login/>
      </Route>

      <Route exact path ='/register'>
        <Register/>
      </Route>

      <Route exact path ='/users'>
        <Users/>
      </Route>
      
    </Switch>
    
    
    </div>
  );
}

export default App;
