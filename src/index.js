import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/home'
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'


function Pagina404() {
  return (
    <div>
      Página 404
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />      
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);