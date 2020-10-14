import React from 'react';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import History from './components/History';
import Profile from './components/Profile';
import Game from './components/Game';
import NotFound from './components/common/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import './style.css';
import store from './store'
import MultiPlayer from './components/MultiPlayer';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/profile" component={Profile} />
        <Route path="/multi-player" component={MultiPlayer} />
        <Route path="/game/:id" component={Game} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
