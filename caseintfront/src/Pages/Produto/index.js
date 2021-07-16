import React from 'react';
import Header from '../../Components/Header';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import './style.css'

export default function Produto(){

    const productinfo=JSON.parse(localStorage.getItem('Produto'))

    return(
        <>
            <Header/>
            <div className = 'container'>
                <Link to='/encarte' className = 'arrow'><BsArrowLeft size={50}/></Link>
                <div className = 'info'>
                    <h2>Informações Sobre o Produto</h2>
                    <div className = 'product-image'>
                        <img src={productinfo.imagem}/>
                    </div>
                    <div className = 'product-title'/>{productinfo.produto}
                    <div className = 'product-title'/>{productinfo.preco}
                    <div className = 'product-title'/>{productinfo.disponibilidade}
                </div>
            </div>
        </>
    )
}