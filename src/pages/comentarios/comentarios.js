import './comentarios.css';
import React from "react";
import logo from '../../assets/logo.jpg';
import stars from '../../assets/star.png';
import Header from '../../components/head/header';


function Comentários() {
    return (
       <div>
            <Header/>
            <div className='banner'></div>
            <h1>Comentários</h1>
            <section className='coment-flex'>
                <div className='flex'>
                    <img className='max' src={logo}/>
                    <h3>Lucas</h3>
                    <div className='star'>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    </div>
                    <p>Amei essa edição de filme, diretor fez uma otima direção!</p>
                    </div>    
                    <div className='flex'>
                    <img className='max' src={logo}/>
                    <h3>Alexandre</h3>
                    <div className='star'>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>   
                    <img className='star' src={stars}/> 
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>   
                    </div>
                    <p>Filme excelente recomendo todos! </p>
                    </div>
                
            
                    <div className='flex'>
                    <img className='max' src={logo}/>
                    <h3>Nicole</h3>
                    <div className='star'>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/>
                    <img className='star' src={stars}/> 
                    </div>
                    <p id='p-f'>Muito bom o filme!</p>    
                </div>
            </section>
        </div>
    )
}
export default Comentários;