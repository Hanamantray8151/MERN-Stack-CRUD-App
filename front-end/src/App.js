import React from 'react';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Allusers from './Component/Allusers';
import Adduser from './Component/Adduser';
import Edituser from './Component/Edituser';
import Notfound from './Component/Notfound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={Allusers} />
        <Route exact path="/add" component={Adduser} />
        <Route exact path="/edit/:id" component={Edituser} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;