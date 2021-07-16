import React from 'react';
import Card from '../../Components/Card/index';
import Header from '../../Components/Header';
import './style.css'

//importanto as fotos
import Tomate from '../../Assets/tomate.jfif'
import Abobrinha from '../../Assets/abobrinha.jfif'
import BatataIng from '../../Assets/batataing.jpg'
import Beringela from '../../Assets/beringela.jfif'
import Brocolis from '../../Assets/brocolis.jfif'
import Mix from '../../Assets/mix.jfif'
import Cebola from '../../Assets/cebola.jfif'
import Melancia from '../../Assets/melancia.jfif'

export default function Encarte(){

    localStorage.setItem('Produto',"")

    const list = [
        {
            imagem: Tomate,
            produto: 'Tomate',
            preco: 'R$1,49',
            disponibilidade: 'Em estoque'
        },
        {
            imagem: Cebola,
            produto: 'Cebola',
            preco: 'R$0,75',
            disponibilidade: 'Em estoque'
        },
        {
            imagem: BatataIng,
            produto: 'Batata Inglesa',
            preco: 'R$1,40',
            disponibilidade: 'Em estoque'
        },
        {
            imagem: Melancia,
            produto: 'Melancia',
            preco: 'R$6,00',
            disponibilidade: 'Em estoque'
        },
        {
            imagem: Abobrinha,
            produto: 'Abobrinha',
            preco: 'R$3,50',
            disponibilidade: 'Indisponível'
        },
        {
            imagem: Beringela,
            produto: 'Beringela',
            preco: 'R$3,23',
            disponibilidade: 'Indisponível'
        },
        {
            imagem: Brocolis,
            produto: 'Brócolis',
            preco: 'R$1,74',
            disponibilidade: 'Em estoque'
        },
        {
            imagem: Mix,
            produto: 'Mix Legumes Fatiados',
            preco: 'R$13,90',
            disponibilidade: 'Em estoque'
        }
    ]

    const renderList = list.map((item,index)=>(
        <li key={index}>
            <Card data = {item}/>
        </li>
    )
    )

    return(
        <>
            <Header/>
            <div className = 'container'>
                <div className = 'title-container'>
                    <u1>
                        {renderList}
                    </u1>
                </div>
            </div>
        </>
    )
}
