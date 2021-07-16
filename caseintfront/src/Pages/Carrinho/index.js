import React from 'react';
import './style.css'
import Header from '../../Components/Header';

export default function Carrinho(){
    return(
        <>
            <Header/>
            <div className = 'compras'>
                <button className = 'finalizar'>Finalizar Compra</button>
            </div>
            

        </>
    )
}