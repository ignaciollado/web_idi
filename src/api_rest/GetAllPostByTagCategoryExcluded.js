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
    const { totalPages, categoryExcluded } = props
    const { t, i18n } = useTranslation()
    const { tag } = useParams()
    const currentLanguage = i18n.language
    //const URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_fields[]=tags&_fields[]=content&_fields[]=title&_fields[]=date&_fields[]=id&per_page=${totalPages}&tags=${tag}&lang=${currentLanguage}`
    let URI_IDI_PAGE = ''
    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&per_page=${totalPages}&tags=${tag}&categories_exclude=${categoryExcluded}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&per_page=${totalPages}&tags=${tag}&categories_exclude=${categoryExcluded}`
          break;
      }
    alert (URI_IDI_PAGE)
    const [allpostbytagExcluded, setAllPostByTagExcluded] = useState()
    
    //const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setAllPostByTagExcluded(responseJSON)          
    //}

    //useEffect(()=>{peticionGET()})

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setAllPostByTagExcluded(response.data);
            }
          );  
    }, [setAllPostByTagExcluded])

    return (
        <div className="postsetgrid">
            {
                !allpostbytagExcluded ? <strong>{t('description.loadingNews')}</strong>:
                allpostbytagExcluded.map(((allpostbytagExcluded) => (
                    <div id={allpostbytagExcluded.id} className="postsetgrid__item" 
                        dangerouslySetInnerHTML={{ __html: `
                        <figure>
                            <img aria-label="${allpostbytagExcluded.title.rendered}" alt="${allpostbytagExcluded.title.rendered}" title="${allpostbytagExcluded.title.rendered}" src=${allpostbytagExcluded._embedded['wp:featuredmedia'][0].source_url}>
                            <figcaption></figcaption>
                        </figure>
                       
                        <span>
                            <time datetime=${ Moment(allpostbytagExcluded.date).format('YYYY-MM-DDThh:mm')}>${ Moment(allpostbytagExcluded.date).format('DD-MM-YYYY')}</time>   
                        </span>
                        <a id="info" href=/getpostbyslug/${allpostbytagExcluded.slug}><h1 id="titulo">${allpostbytagExcluded.title.rendered}</h1></a>                
                    `}}/>)))
            }
        </div>
    )
}
