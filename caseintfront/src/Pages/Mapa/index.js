import React from 'react';
import './style.css'
import Header from '../../Components/Header';

export default function Mapa(){
    return(
        <>
            <Header/>
            <div className = 'areadelivery'>
                <div className = 'entrega'>
                    <h3>Verifique se seu endereço está dentro de nossa área de entrega:</h3>
                    <input className = 'myaddres' placeholder = 'Endereço'></input>
                </div>
                <div className = 'endereco'>
                </div>
            </div>
        </>
    )
}