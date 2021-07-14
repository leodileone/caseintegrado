import React from 'react';
import Card from '../../Components/Card/index';
import './style.css'

export default function Carrinho(){
    const list = [
        {
            produto: 'Queijo Minas',
            marca: 'Fazendão',
            quantidade: '300g',
            preco: 'R$15,90'
        },
        {
            produto: 'Pão Integral',
            marca: 'Wickbold',
            quantidade: '1',
            preco: 'R$8,90'
        },
        {
            produto: 'Café',
            marca: 'Pilão',
            quantidade: '2',
            preco: 'R$7,80'
        }
    ]

    const renderList = list.map((item,index)=>(
        <li key={index}>
            <Card data = {item}/>
        </li>
    )
    )

    return(
        <div className = 'container'>
            <div className = 'title-container'>
                <h1>Encarte</h1>
                <u1>
                    {renderList}
                </u1>
            </div>
        </div>
    )
}
