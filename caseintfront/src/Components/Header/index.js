import React from 'react';
import './style.css'

//icon
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {FaQuestion} from 'react-icons/fa';
import {GiMagnifyingGlass} from 'react-icons/gi';

export default function Header(){
    return(
        <header>
            <h1>Hortifruit</h1>
            <form>
                <input placeholder='Buscar'/>
                <GiMagnifyingGlass/>
            </form>
            <div className = 'menu'>
                <h3>Cliente <BsFillPersonFill/></h3>
                <h3>Meu Carrinho <AiOutlineShoppingCart/></h3>
                <h3>Suporte <FaQuestion/></h3>
            </div>
        </header>
    )
}