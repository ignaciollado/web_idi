import React from 'react'
import { useState, useEffect } from 'react'

//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------

import '../css/formatquisom.css'
import Axios from 'axios'

export default function GetAllPostByAService(props) {
    const { categoryName, category } = props
    const [allpostbyservice, setAllPostByService] = useState()
    const { t, i18n } = useTranslation()
    let currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

function serviceClass (category) {
    let spanServiceClass
    switch (category) {
        case 91:
            spanServiceClass = <span class="lee">{categoryName}</span>
          break;
        case 92:
            spanServiceClass = <span class="ite">{categoryName}</span>
          break;
        case 93:
            spanServiceClass = <span class="sas">{categoryName}</span>
          break;
        case 94:
            spanServiceClass = <span class="fic">{categoryName}</span>
            break;
        case 95:
            spanServiceClass = <span class="int">{categoryName}</span>
            break;            
        default:
            spanServiceClass = <span >{categoryName}</span>
          break;
      }
      return spanServiceClass
}

    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&categories=${category}`
        break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&categories=${category}`
        break;
      }
    
    // alert (URI_IDI_PAGE)

    //const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setAllPostByCategory(responseJSON)          
    //}

    //useEffect(()=>{peticionGET(), [i18n.language]})

    useEffect(()=>{ Axios.get(URI_IDI_PAGE).then(response => {setAllPostByService(response.data);});}, [setAllPostByService])

    return (
        <div>
                    <div className='formatquisom__item__servicio__header'>
                        { serviceClass (category) }
                    </div>
            <div className='formatquisom__item__servicio__body'>       
            {
                !allpostbyservice ? <strong>{t('description.loading')}</strong>:
                    ( 
                        
                        allpostbyservice.map( (allpostbyservice) => (

                            <div className='formatquisom__item__proyecto' key={allpostbyservice.id} id={allpostbyservice.id} dangerouslySetInnerHTML={
                                    { __html: `
                                        <a id="info" href=getproject/${allpostbyservice.slug}/${allpostbyservice.categories[0]}> ${allpostbyservice.title.rendered} </a>
                                    `}
                            }/>
                            
                                                                    )

                                            ) 


                    )
            } 
            </div>
        </div>
    )
}