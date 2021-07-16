import React from 'react';
import './style.css';
import Header from '../../Components/Header';
import {Link} from 'react-router-dom';

export default function Home(){

    return(
        <>
            <Header/>
            <div className = 'telainicial'>
                <div className = 'slogan'>
                    <h1>O melhor Hortifruti da região!</h1>
                    <h4>Desde 1999 participando das suas mais importantes refeições, venha fazer uma visita.</h4>
                </div>
                <div className = 'preencher'>
                    <div className = 'login'>
                        <h3>Já é cliente? Faça seu login!</h3>
                        <input className = 'email' placeholder = 'Email'></input>
                        <input type = 'password' className = 'senha' placeholder = 'Senha'></input>
                        <Link to='/perfil'><button type = 'submit'>Login</button></Link>
                    </div>
                    <div className = 'cadastro'>
                        <h3>Não é cliente? Faça já o seu cadastro!</h3>
                        <input className = 'email' placeholder = 'Email'></input>
                        <input type = 'password' className = 'senha' placeholder = 'Senha'></input>
                        <input type = 'password' className = 'senha' placeholder = 'Confirmar Senha'></input>
                        <Link to='/perfil'><button type = 'submit'>Cadastrar</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}