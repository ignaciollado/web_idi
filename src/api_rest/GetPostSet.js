import React from 'react'
import { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
//----------- Needed for date formatting ------------------------------------------
import Moment from 'moment'
//---------------------------------------------------------------------------------
import '../css/formatpostset.css'
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
    // alert (URI_IDI_PAGE)
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
                        <!--<a id="info" href=getpostbyslug/${postSet.slug}>
                            <img id="imagen" alt="${postSet.title.rendered}" title="${postSet.title.rendered}" src=${postSet._embedded['wp:featuredmedia'][0].source_url} />
                            <span>
                                <time datetime=${ Moment(postSet.date).format('YYYY-MM-DDThh:mm')}> ${t('description.hace')} ${ parseInt((Moment(postSet.date).diff(Date().toLocaleString())/(1000 * 60 * 60 * 24)*-1), 0) }${t('description.dias')}</time>   
                            </span>
                            <h1 id="titulo">${postSet.title.rendered}</h1>
                        </a>-->

                        <a id="info" href=getpostbyslug/${postSet.slug}><figure>
                            <img aria-label="" id="imagen" alt="${postSet.title.rendered}" title="${postSet.title.rendered}" src=${postSet._embedded['wp:featuredmedia'][0].source_url} />
                            <figcaption >
                            <div>
                                <time datetime=${ Moment(postSet.date).format('YYYY-MM-DDThh:mm')}> ${t('description.hace')} ${ parseInt((Moment(postSet.date).diff(Date().toLocaleString())/(1000 * 60 * 60 * 24)*-1), 0) }${t('description.dias')}</time>   
                            </div>
                            ${postSet.title.rendered}</figcaption>
                        </figure></a>

                        `}}
                    />
                    )))
            }
        </div>
    )
}