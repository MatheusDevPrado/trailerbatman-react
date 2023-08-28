import './fotos.css';
import React from "react";
import Header from '../../components/head/header';
import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';
import foto3 from '../../assets/foto3.jpg';
import foto4 from '../../assets/foto4.jpg';
import foto5 from '../../assets/foto5.jpg';
import foto6 from '../../assets/foto6.jpg';
import foto7 from '../../assets/foto7.jpg';
import foto8 from '../../assets/foto8.jpg';
import foto9 from '../../assets/foto10.jpg';
import foto10 from '../../assets/foto11.jpg';
import foto11 from '../../assets/foto1.jpg';


function Fotos() {
    return (
        <div>
            <Header/>
        <div>
        < div className='banner'></div>    
        <h1>Galeria</h1>
        <div className="coluna-container">
            <div className="coluna">
                <img className="foto" src={foto1}/>  
                <img className="foto" src={foto2}/>
                <img className="foto" src={foto3}/>
                <img className="foto" src={foto4}/>
                </div>
                <div className="coluna">  
                <img className="foto" src={foto5}/>
                <img className="foto" src={foto6}/>
                <img className="foto" src={foto7}/>
                <img className="foto" src={foto8}/>
                </div>
                <div className="coluna">
                <img className="foto" src={foto9}/>
                <img className="foto" src={foto10}/>
                <img className="foto" src={foto11}/>
            </div>
       </div>
       </div>  
        </div>
    )
}
export default Fotos;