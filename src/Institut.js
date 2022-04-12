import React from 'react'
import './css/institut.css'
import img3 from './images/test/Sdl_Web_TDA_Thumbnail_2400x1600-768x512.jpg'
import img4 from './images/test/sdl-web-cfl_thumb-768x511.jpg'
export default function Institut(props) {
    return (
        <div className="institut">
            <div className="institut__cabecera">Institut</div>
            <div>
            <figure className="institut__iemprenjove">
            <a href="/"><img src={img3}
                alt="iEmprenjove" title="iEmprenjove"/>
                <figcaption>iEmpren jove</figcaption></a>
            </figure>
            </div>
            <div>
            <figure className="institut__comerciescola">
            <a href="/"><img src={img4}
                alt="Comerç i escola" title="Comerç i escola"/>
                <figcaption>Comerç i escola</figcaption></a>
            </figure>    
            </div>        
        </div>
    )
}

