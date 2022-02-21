import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
//----------- Needed for date formatting ------------------------------------------
import Moment from 'moment'
//---------------------------------------------------------------------------------
import '../css/formatpostbyslug.css'
import Axios from 'axios'

export default function GetPostBySlug() {
    const { theSlug } = useParams()
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&slug=${theSlug}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&slug=${theSlug}`
            break;
    }

    // alert (URI_IDI_PAGE)

    const [postSet, setPostSet] = useState()
    
    //const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setPostSet(responseJSON)          
    //}

    function iterateCategorySubnodes (objeto) {
        let itemTags = []
        for (var i = 0; i < objeto.length; i++) {
            itemTags.push(`<a href=/getpostbycategory/${objeto[i].id}> ${objeto[i].name.toLowerCase()}</a>`) 
        } 
        return itemTags
     }    

    function iterateTagSubnodes (objeto) {
        let itemTags = []
        for (var i = 0; i < objeto.length; i++) {
            itemTags.push(`<a href=/getpostbytag/${objeto[i].id}> ${objeto[i].name.toLowerCase()}</a>`) 
        } 
        return itemTags
     }

    //useEffect(()=>{peticionGET()})
    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setPostSet(response.data);
            }
          );  
    }, [setPostSet])

    return (
        <div className="formatpost">
            {
                !postSet ? <strong>{t('description.loadingNews')}</strong>:
                postSet.map(((postSet) => (
                        <div 
                            className="formatpost__item" 
                            id={postSet.id} 
                            dangerouslySetInnerHTML={
                                { __html: `
                                <div id="apartado">${t('description.news')}</div>
                                    <div>
                                        <div id="title">${postSet.title.rendered}</div>
                                        <!--<span><time datetime=${ Moment(postSet.date).format('YYYY-MM-DDThh:mm')}>${ Moment(postSet.date).format('DD-MM-YYYY')}</time></span>-->
                                        <article>${postSet.content.rendered}</article>
                                    </div>
                                    
                                    <div id="news_image">
                                    <figure>
                                        <img aria-label="${postSet.title.rendered}" alt="${postSet.title.rendered}" title="${postSet.title.rendered}" src=${postSet._embedded['wp:featuredmedia'][0].source_url}>
                                        <figcaption></figcaption>
                                    </figure>
                                    </div>
                                    
                                    <div id="categories_tags"><strong>${t('description.archivedAs')}</strong><hr>
                                        <span class="categories_item">${t('description.categoryzedContents')} ${ iterateCategorySubnodes (postSet._embedded['wp:term'][0]) }</span>
                                        <span class="tags_item">${t('description.taggedContents')} ${ iterateTagSubnodes (postSet._embedded['wp:term'][1]) }</span>
                                    </div>
                                   
                                `}}
                        />
                        )))       
            }
        </div>
    )
}