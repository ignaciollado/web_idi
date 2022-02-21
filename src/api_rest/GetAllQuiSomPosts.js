import React from 'react'
import QuienesSomos from '../components/QuiSomPart'
import QuienesSomosProyectos from './GetAllSubServices'
import QuienesSomosExplora from '../components/QuiSomExplora'
import quisom from '../images/qui-som.jpg'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
import '../css/formatquisom.css'

export default function GetAllQuiSomPosts(props) {
    const { t } = useTranslation()

    return (
        
        <div className='quisomcontaniner'>

            <span className='quisomcontaniner__header'>{t('description.about')}?</span>
            <figure>
                <img aria-label="" alt={t('description.about')} title={t('description.about')} src= {quisom} />
            </figure>

            <div className="formatquisom__item">
                <div><h1>IDI</h1></div>
                <div> <QuienesSomos theSlug="qui-som" /></div>
            </div>
            
            <div className="formatquisom__item">
                <div><h1>{t('description.proyectosIDI')}</h1></div>
                <div><QuienesSomosProyectos theMainCategory="90" categoryExcluded="1"/></div>
            </div>
            
            <div className="formatquisom__item">
                <div><h1>{t('description.hostoriaIDI')}</h1></div>
                <div> <QuienesSomos theSlug="la-historia-de-lidi" /></div>
            </div>

            <QuienesSomosExplora />
            
        </div>
    )
}