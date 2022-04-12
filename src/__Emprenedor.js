import React from 'react'
import "./css/emprenedor.css"
import img1 from './images/test/PCP_Thumbnail-768x512.png'
import img2 from './images/test/sdl_emmer_02-768x512.jpg'
import img3 from './images/test/Sdl_Web_TDA_Thumbnail_2400x1600-768x512.jpg'
import img4 from './images/test/sdl-web-cfl_thumb-768x511.jpg'
import img5 from './images/test/PCP_Thumbnail-768x512.png'
import img6 from './images/test/sdl_emmer_02-768x512.jpg'

export default function Emprenedor(props) {
    //Usando el deestructuring de javaScript optengo las propiedades pasadas
    const {titulo, contenido} = props;
    return (
        <div className="emprenedor">
            <div className="emprenedor__cabecera">{titulo}</div>
            <figure className="emprenedor__iempren">
            <a href="/"><img src={img1}
                alt="iEmpren" title="iEmpren"/>
                <figcaption>iEmpren</figcaption></a>
            </figure>
            <figure className="emprenedor__reempresa">
            <a href="/"><img src={img2}
                alt="Reempresa" title="Reempresa"/>
                <figcaption>Reempresa</figcaption></a>
            </figure>
            <figure className="emprenedor__centreBit">
            <a href="/"><img src={img3}
                alt="Centre BIT Inca incubadora" title="Centre BIT Inca incubadora"/>
                <figcaption>Centre BIT incubadora</figcaption></a>
            </figure>
            <figure className="emprenedor__registreMarques">
            <a href="/"><img src={img4}
                alt="Registre de marques" title="Registre de marques"/>
                <figcaption>Registre de marques</figcaption></a>
            </figure>
            <figure className="emprenedor__formacio">
                <a href="/"><img src={img5}
                alt="Formació" title="Formació"/>
                <figcaption>Formació</figcaption></a>
            </figure>
            <figure className="emprenedor__ajutsSubvencions">
            <a href="/"><img src={img6}
                alt="Ajuts i subvencions" title="Ajuts i subvencions"/>
                <figcaption>Ajuts i subvencions</figcaption></a>
            </figure>                        
        </div>
    )
}
