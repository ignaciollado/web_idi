import React from "react"
import { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
import '../css/formatquisom.css'

import Axios from 'axios'

export default function QuiSomPart(props) {

    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    const { theSlug } = props
    let  URI_IDI_PAGE = ''

    switch (currentLanguage) {
            case 'en':
            case 'es':
                URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&slug=${theSlug}`
                break;
            default: //Es el idioma por defecto establecido en Wordpress (en este caso es el catalán)
                URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&slug=${theSlug}`
                break;
        }
    
    // alert (URI_IDI_PAGE)

    const [postSet, setPostSet] = useState()

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setPostSet(response.data);
            }
          );  
    }, [setPostSet])

    return (
                <div >
            {
                !postSet ? <strong>{t('description.loadingNews')}</strong>:
                postSet.map(((postSet) => (
                        <div  id={postSet.id} dangerouslySetInnerHTML={
                                { __html: `
                                    
                                    <div>
                                        ${postSet.content.rendered}
                                    </div>                        
                                  
                                `}}
                        />
                        )))       
            }
        </div>
    )

}