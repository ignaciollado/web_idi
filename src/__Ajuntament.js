import React from 'react'
import "./css/ajuntament.css"
import img1 from './images/test/PCP_Thumbnail-768x512.png'
import img2 from './images/test/sdl_emmer_02-768x512.jpg'

export default function Ajuntament(props) {
    return (
        <div className="ajuntament">
            <div className="ajuntament__cabecera">Ajuntament</div>
            <div>
            <figure className="ajuntament__icomerc">
            <a href="/"><img src={img1}
                alt="iComerç" title="iComerç"/></a>
                <figcaption>iComerç</figcaption>
            </figure>
            </div>
            <div>
            <figure className="ajuntament__emblematics">
            <a href="/"><img src={img2}
                alt="Comerços emblemàtics de les Illes Balears" title="Comerços emblemàtics de les Illes Balears"/>
                <figcaption>Emblemàtics</figcaption></a>
            </figure>
            </div>
       
        </div>
    )
}
