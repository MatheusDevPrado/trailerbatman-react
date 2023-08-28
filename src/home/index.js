import './index.css';
import React from "react";
import Header from "../components/head/header";
import Cards from "../components/cards/cards";
import video from '../assets/video.mp4';

function Home() {
    return (
        <div>
            <Header />
            <div id="banner"></div>
            <div id="conteiner-trailer">
                <div className="content">
                <video controls className="trailer">
                <source  src= {video}/>
                Seu navegador não tem suporte para o video.
                </video>
                <div id="sinopse">
                <p className="description">
                Após dois anos espreitando as ruas como Batman,
                Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. 
                Com poucos aliados confiáveis, o vigilante solitário se estabelece 
                como a personificação da vingança para a população.
                </p>
                <button className="button">Comprar Ingresso</button>
                </div>
            </div>
            </div>
            <Cards />
        </div>
    )
}
export default Home;