import React from 'react';
import "./style.css"

export default function Card({data}){
    return(
        <div className = 'card-container'>
            <h3>
                <strong className = 'card-title'>Produto</strong> : {data.produto}
            </h3>
            <h3>
                <strong className = 'card-title'>Marca</strong> : {data.marca}
            </h3>
            <h3>
                <strong className = 'card-title'>Quantidade</strong> : {data.quantidade}
            </h3>
            <h3>
                <strong className = 'card-title'>Preço</strong> : {data.preco}
            </h3>
        </div>
    )
}