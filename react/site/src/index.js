import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './styles.css'

import Teste from "./InfoD/teste";
import Contador from "./InfoD/comunicacaoComps/contador";
import Pedido from "./InfoD/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./InfoD/comunicacaoComps/finalizacaoPedido/conclusao";

import App from './InfoD/home'
import DetalheProduto from './InfoD/detalheProduto'
import Carrinho from './InfoD/carrinho'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />

        <Route path="/teste" component={Teste} />
        <Route path="/infoX/contador" exact={true} component={Contador} />
        <Route path="/infoX/pedido" component={Pedido} />
        <Route path="/infoX/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);