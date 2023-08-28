import './contato.css';
import React from "react";
import Header from '../../components/head/header';


function Contato() {
    return (
        <div>
           <Header/>
           <div className='banner'></div>
           <div className='contato'>
            <form className='formulario' action='./index.html'>
            <p id='p-i'>Entre em Contato por Email ou Telefone.</p>
            <div className='field'>
                <label for='nome'>Nome:</label>
                <input type='text' id='nome' name='nome' placeholder='Seu nome*' required/>
                </div>
            <div className='field'>
                <label for='email'>Email:</label>
                <input type='text' id='email' nome='email' placeholder='Seu email*' required/>
                </div>    
            <div className='field radiobox'>
                <span>Gostaria de Receber Novidades no Email?</span>
                <label for='sim'>Sim</label>
                <input type='radio' name='Novidades' value='sim' checked/>
                <label for='nao'>Não</label>
                <input type='radio' name='Novidades' value='nao' checked/>
                </div>
            <div className='field'>
                <label for='messagem'>Messagem:</label>
                <textarea type='text' id='messagem' nome='messagem' placeholder='Escreva sua messagem*' required></textarea>
                </div>
            <input className='bottun' type='submit' nome='acao' value='Enviar'/>
            </form>
            </div>
            
        </div>
    )
}
export default Contato;