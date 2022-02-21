import React from "react"
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
import ayuntamiento from '../images/ets-un-ajuntament.png'
import empresa from '../images/ets-una-empresa.png'
import emprendedor from '../images/ets-un-emprenedor.png'
import centroEducativo from '../images/ets-un-centre-educatiu.png'
import '../css/formatquisom.css'

export default function QuiSomExplora() {

    const { t } = useTranslation()

    return (
            <div className='formatquisom__explora' dangerouslySetInnerHTML={
            {__html: `
                <span >${ t('description.exploraProyectos') }</span>
                <div class="formatquisom__explora__item">
                <a href="#Ets una empresa"><figure>
                        <img aria-label="" alt="empresa" title="empresa" src= ${ empresa } />
                        <figcaption >${ t('description.eresEmpresa') }</figcaption>
                    </figure></a>
                <a href="#Ets un emprenedor"><figure>
                        <img aria-label="" alt="emprenedor" title="emprenedor" src= ${ emprendedor } />
                        <figcaption >${ t('description.eresEmprendedor') }</figcaption>
                    </figure></a>
                <a href="#Ets un ajuntament"><figure>
                        <img aria-label="" alt="ajuntament" title="ajuntament" src= ${ ayuntamiento } />
                        <figcaption >${ t('description.eresAyuntamiento') }</figcaption>
                    </figure></a>
                <a href="#Ets un centre educatiu"><figure>
                        <img aria-label="" alt="centre educatiu" title="centre educatiu" src= ${ centroEducativo } />
                        <figcaption >${ t('description.eresCentroEducativo') }</figcaption>
                    </figure></a>
                </div>
                `}}
            />
        )

}