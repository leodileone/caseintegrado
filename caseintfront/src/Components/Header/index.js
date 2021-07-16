import React from 'react';
import './style.css'
import { Link, NavLink } from 'react-router-dom';

//icon
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {FaCarrot} from 'react-icons/fa';
import {GrMapLocation} from 'react-icons/gr';

export default function Header(){
    return(
        <div className = 'header'>
            <Link to='/'><h1 className = 'header-link-homepage'>Nikityfruti</h1></Link>
            <div className = 'menu'>
                <NavLink to='/perfil'><h3 className = 'header-link'>Perfil <BsFillPersonFill/></h3></NavLink>
                <NavLink to='/mapa' ><h3 className = 'header-link'>Mapa <GrMapLocation/></h3></NavLink>
                <NavLink to='/encarte'><h3 className = 'header-link'>Encarte <FaCarrot/></h3></NavLink>
                <NavLink to='/carrinho'><h3 className = 'header-link'>Carrinho <AiOutlineShoppingCart/></h3></NavLink>
            </div>
        </div>
    )
}