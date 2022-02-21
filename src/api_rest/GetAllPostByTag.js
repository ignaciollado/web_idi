import React from 'react'
import { useParams } from 'react-router-dom'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
import { useState, useEffect } from 'react'
//----------- Needed for date formatting ------------------------------------------
import Moment from 'moment';
//---------------------------------------------------------------------------------
import '../css/formatpostset.css'
import Axios from 'axios'

export default function GetAllPostbyTag(props) {
    const { totalPages } = props
    const { t, i18n } = useTranslation()
    const { tag } = useParams()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&per_page=${totalPages}&tags=${tag}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&per_page=${totalPages}&tags=${tag}`
          break;
      }

    const [allpostbytag, setAllPostByTag] = useState()
    
    //const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setAllPostByTag(responseJSON)          
    //}

    //useEffect(()=>{peticionGET()})

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setAllPostByTag(response.data);
            }
          );  
    }, [setAllPostByTag])

    return (
        <div className="postsetgrid">
            {
                !allpostbytag ? <strong>{t('description.loadingNews')}</strong>:
                allpostbytag.map(((allpostbytag) => (
                    <div id={allpostbytag.id} className="postsetgrid__item" 
                        dangerouslySetInnerHTML={{ __html: `
                        <figure>
                            <img aria-label="${allpostbytag.title.rendered}" alt="${allpostbytag.title.rendered}" title="${allpostbytag.title.rendered}" src=${allpostbytag._embedded['wp:featuredmedia'][0].source_url}>
                            <figcaption></figcaption>
                        </figure>
                       
                        <span>
                            <time datetime=${ Moment(allpostbytag.date).format('YYYY-MM-DDThh:mm')}>${ Moment(allpostbytag.date).format('DD-MM-YYYY')}</time>   
                        </span>
                        <a id="info" href=/getpostbyslug/${allpostbytag.slug}><h1 id="titulo">${allpostbytag.title.rendered}</h1></a>                
                    `}}/>)))
            }
        </div>
    )
}
