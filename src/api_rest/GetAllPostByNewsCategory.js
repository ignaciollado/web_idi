import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
//----------- Needed for date formatting ------------------------------------------
import Moment from 'moment'
//---------------------------------------------------------------------------------
import '../css/formatpostset.css'
import Axios from 'axios'

export default function GetAllPostByNewsCategory() {
    const { theCategory } = useParams()
    const [allpostbynewscategory, setallpostbynewscategory] = useState()
    const { t, i18n } = useTranslation()
    let currentLanguage = i18n.language
    let URI_IDI_PAGE = ''
    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&categories=${theCategory}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&categories=${theCategory}`
            break;
      }

    // const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setallpostbynewscategory(responseJSON)          
    //}

    // useEffect(()=>{peticionGET()})

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setallpostbynewscategory(response.data);
            }
          );  
    }, [setallpostbynewscategory])

    return (
        <div className="postsetgrid">
        
            {
                !allpostbynewscategory ? <strong>{t('description.loadingNews')}</strong>:
                allpostbynewscategory.map(((allpostbynewscategory) => (
                    <div key={allpostbynewscategory.id} className="postsetgrid__item"   
                        dangerouslySetInnerHTML={{ __html: `
                        <figure>
                            <img aria-label="${allpostbynewscategory.title.rendered}" 
                             alt="${allpostbynewscategory.title.rendered}" 
                             title="${allpostbynewscategory.title.rendered}" 
                             src=${allpostbynewscategory._embedded['wp:featuredmedia'][0].source_url} />
                            <span>
                            <time datetime=${ Moment(allpostbynewscategory.date).format('YYYY-MM-DDThh:mm')}>${ Moment(allpostbynewscategory.date).format('DD-MM-YYYY')}</time>   
                            </span>
                            <figcaption></figcaption>
                        </figure>

                        <!--<img id="imagen" alt="${allpostbynewscategory.title.rendered}" title="${allpostbynewscategory.title.rendered}" src=${allpostbynewscategory._embedded['wp:featuredmedia'][0].source_url} />-->
                        
                        <a id="info" href=/getpostbyslug/${allpostbynewscategory.slug}><h1 id="titulo">${allpostbynewscategory.title.rendered}</h1></a>
                        `}}
                    />
                    )))
            } 
        </div>
    )
}
