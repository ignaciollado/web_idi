import React from 'react'
import './css/empresa.css'
import img1 from './images/test/PCP_Thumbnail-768x512.png'
import img2 from './images/test/sdl_emmer_02-768x512.jpg'
import img3 from './images/test/Sdl_Web_TDA_Thumbnail_2400x1600-768x512.jpg'
import img4 from './images/test/sdl-web-cfl_thumb-768x511.jpg'
import img5 from './images/test/PCP_Thumbnail-768x512.png'
import img6 from './images/test/sdl_emmer_02-768x512.jpg'


export default function Empresa(props) {
    return (
        <div className="empresa">
            <div className="empresa__cabecera">Empresa</div>
            <figure className="empresa__reempresa">
            <a href="/"><img src={img1}
                alt="Reempresa" title="Reempresa"/>
                <figcaption>Reempresa</figcaption></a>
            </figure>
            <figure className="empresa__xecs">
            <a href="/"><img src={img2}
                alt="Xecs consultoria indústria Illes Balears" title="Xecs consultoria indústria Illes Balears"/>
                <figcaption>Xecs de consultoria</figcaption></a>
            </figure>
            <figure className="empresa__agenda">
            <a href="/"><img src={img3}
                alt="Agenda de formació i d'activitats" title="Agenda de formació i d'activitats"/>
                <figcaption>Formació / agenda</figcaption></a>
            </figure>
            <figure className="empresa__idiisba">
            <a href="/"><img src={img4}
                alt="IDI-ISBA finançament, ajuts, subvencions" title="IDI-ISBA finançament, ajuts, subvencions"/>
                <figcaption>IDI-ISBA finançament</figcaption></a>
            </figure>
            <figure className="empresa__colaboracions">
            <a href="/"><img src={img5}
                alt="Col·laboracions amb afins, clusters, pa d'aqui" title="Col·laboracions amb afins, clusters, pa d'aqui"/>
                <figcaption>Col·laboracions</figcaption></a>
            </figure>
            <figure className="empresa__subasta">
            <a href="/"><img src={img6}
                alt="Subasta Porreres" title="Subasta Porreres"/>
                <figcaption>¿Subasta Porreres?</figcaption></a>
            </figure>

        </div>
    )
}
