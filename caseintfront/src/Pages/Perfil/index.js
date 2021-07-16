//import React, {useState} from 'react';
import './style.css'
import fotoperfil from '../../Assets/fotoperfil.png'
import Header from '../../Components/Header';

export default function Perfil(){

    /*const [nome,setNome] = useState();
    const [sobrenome,setSobrenome] = useState();
    const [email,setEmail] = useState();
    const [cpf,setCpf] = useState();
    const [endereco,setEndereco] = useState();
    const [pagamento,setPagamento] = useState();*/


    return(
        <>
            <Header/>
            <div className = 'perfil'>
                <div className = 'dadoscliente'>
                    <img className = 'fotoperfil' src={fotoperfil}/>
                    <h3>Nome: Leonardo</h3>
                    <h3>Sobrenome: Amato</h3>
                    <h3>Email: leozinho@email.com</h3>
                    <h3>CPF: 999.999.999-99</h3>
                    <h3>Endereço: Av das Américas 353</h3>
                    <h3>Forma de Pagamento: Dinheiro</h3>
                </div>
                <div className = 'editarperfil'>
                    <h3>Nome:</h3>
                    <input className = 'seunome' placeholder = 'Insira seu nome' /*onChance={(e)=>setNome(e.currentTarget.value)}*/></input>
                    <h3>Sobrenome:</h3>
                    <input className = 'seusobrenome' placeholder = 'Insira seu sobrenome' /*onChance={(e)=>setSobrenome(e.currentTarget.value)}*/></input>
                    <h3>Email:</h3>
                    <input className = 'seuemail' placeholder = 'Insira seu email' /*onChance={(e)=>setEmail(e.currentTarget.value)}*/></input>
                    <h3>CPF:</h3>
                    <input className = 'seucpf' placeholder = 'Insira seu cpf' /*onChance={(e)=>setCpf(e.currentTarget.value)}*/></input>
                    <h3>Endereço:</h3>
                    <input className = 'seuend' placeholder = 'Insira seu endereço' /*onChance={(e)=>setEndereco(e.currentTarget.value)}*/></input>
                    <h3>Forma de Pagamento:</h3>
                    <input className = 'suaforma' placeholder = 'Insira sua forma de pagamento' /*onChance={(e)=>setPagamento(e.currentTarget.value)}*/></input>
                    <button type = 'submit'>Atualizar Dados</button>
                </div>
            </div>
        </>
    )
}

//Não consegui implementar a atualização dos valores usando useState(), segue como comentário para futuras atualizações (pós PAME)