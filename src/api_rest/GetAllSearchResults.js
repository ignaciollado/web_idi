import React from 'react'
import { useParams } from 'react-router-dom'

//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------

import { useState, useEffect } from 'react'
import '../css/tagspage.css'
import Axios from 'axios'

export default function GetAllSearchResults(props) {
    const { searchTerm } = useParams()
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language

    let URI_IDI_PAGE = ''
    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?search=${searchTerm}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?search=${searchTerm}`
          break;
      }
    const [allSearchPosts, setAllSearchPosts] = useState()
    
    // const paginaGET = async ()=>{
    //    const parsedTags = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await parsedTags.json()
    //    setAllSearchPosts(responseJSON)        
    //}

    // useEffect(()=>{paginaGET()})

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setAllSearchPosts(response.data);
            }
          );  
    }, [setAllSearchPosts])

    return (
        <div className="tagspage__grid">
        
        {
            !allSearchPosts ? <strong>{t('description.searchingTheWeb')}</strong>:
            allSearchPosts.map(((webContent) => (<div id={webContent.id} dangerouslySetInnerHTML={{ __html: `<span><a href=getpostbytag/${webContent.id}><h2>${webContent.title.rendered}</h2></a></span> ${webContent.content.rendered} <hr><br>`}}/>)))
        }
        </div>
    )
}