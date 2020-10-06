import React from 'react';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import SelectPokemon from './pages/selectPokemon';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/team/pokemon" component={SelectPokemon} exact />
    </BrowserRouter>
  );
}
