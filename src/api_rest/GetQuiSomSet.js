import React from 'react'
import { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
//----------- Needed for date formatting ------------------------------------------
import Moment from 'moment'
//---------------------------------------------------------------------------------
import '../css/quisompostset.css'
import Axios from 'axios'

export default function GetPostSet(props) {
    const {totalPages, theCategory} = props
    const [postSet, setPostSet] = useState()
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&per_page=${totalPages}&categories=${theCategory}`
            break;
        default: //Es el idioma por defecto establecido en Wordpress
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&per_page=${totalPages}&categories=${theCategory}`
            break;
      }
    
    alert (URI_IDI_PAGE)
    //const lastNewsFETCH = async ()=> {
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setPostSet(responseJSON)          
    //}
    // useEffect( ()=>{lastNewsFETCH() })

    useEffect(
        ()=>{Axios.get(URI_IDI_PAGE).then(response => {setPostSet(response.data);});}, []
        )
      
    return (
        <div className="postsetgrid">
            {
                !postSet ? <strong>{t('description.loadingNews')}</strong>:
                postSet.map(((postSet) => (
                    <div key={postSet.id} className="postsetgrid__item"   
                        dangerouslySetInnerHTML={{ __html: `
                        <!--<a id="info" href=getpostbyslug/${postSet.slug}>-->
                        <img id="imagen" alt="${postSet.title.rendered}" title="${postSet.title.rendered}" src=${postSet._embedded['wp:featuredmedia'][0].source_url} />
                        <!--<span>
                            <time datetime=${ Moment(postSet.date).format('YYYY-MM-DDThh:mm')}>${ Moment(postSet.date).format('DD-MM-YYYY')}</time>   
                        </span>-->
                        <h1 id="titulo">${postSet.title.rendered}</h1>
                        <h2 id="texto">${postSet.content.rendered}</h2>

                        <!--</a>-->

                        `}}
                    />
                    )))
            }
        </div>
    )
}