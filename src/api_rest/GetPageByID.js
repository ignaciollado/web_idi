import React from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
import { useState, useEffect } from 'react'
import '../css/getpagebyid.css'
// import Axios from 'axios'

export default function GetPageByID(props) {
    const {id} = props
    const { i18n } = useTranslation()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''
    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/pages/${id}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/pages/${id}`
            break;
      }
    // alert (URI_IDI_PAGE)
    const [pageContent, setpageContent] = useState()
    const pageGET = async ()=>{
        const parsedPage = await fetch(URI_IDI_PAGE)
                                .then (response => response.json())
                                .then (data => {
                                    return {__html: `<h1>${data.title.rendered}</h1><div class="getpagebyid__grid__content">${data.content.rendered}</div>`};
                                    });
                                setpageContent(parsedPage)    
    }

    useEffect(()=>{pageGET()})
    //useEffect(()=>{
    //    Axios.get(URI_IDI_PAGE).then(
    //        response => {
    //            setpageContent(response.data);
    //        }
    //      );  
    //}, [setpageContent])

    return (
        <article className="getpagebyid__grid" dangerouslySetInnerHTML={  pageContent } />
    )
}