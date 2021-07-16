import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Perfil from '../Pages/Perfil'
import Mapa from '../Pages/Mapa'
import Encarte from '../Pages/Encarte'
import Carrinho from '../Pages/Carrinho'
import Produto from '../Pages/Produto';

export default function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/perfil' component={Perfil}/>
                    <Route path='/mapa' component={Mapa}/>
                    <Route exact path='/encarte' component={Encarte}/>
                    <Route path='/carrinho' component={Carrinho}/>
                    <Route path='/encarte/produto' component={Produto}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}