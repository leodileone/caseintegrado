import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css"

export default function Card({data}){

    function onCardClick(){
        localStorage.setItem('Produto',JSON.stringify(data))
    }

    return(
        <Link to='/encarte/produto'>
            <div className = 'card-container' onClick={onCardClick}>
            <h3>
                    <strong className = 'card-title'>Produto</strong> : {data.produto}
                </h3>
                <h3>
                    <strong className = 'card-title'>Preço</strong> : {data.preco}
                </h3>
                <h3>
                    <strong className = 'card-title'>Disponibilidade</strong> : {data.disponibilidade}
                </h3>
            </div> 
        </Link>
    )
}