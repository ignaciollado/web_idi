import React from 'react'
import { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
import '../css/getallpostbyacategory.css'
import Axios from 'axios'

export default function GetAllPostByACategory(props) {
    const { categoryName, category } = props
    const [allpostbycategory, setAllPostByCategory] = useState()
    const { t, i18n } = useTranslation()
    let currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

function serviceMainClass (category) {
        let serviceMainClass
        switch (category) {
            case 2:
                serviceMainClass = "getallpostbyacategory"
              break;
            case 3:
                serviceMainClass = "getallpostbyacategory"
              break;
            case 20:
                serviceMainClass = "getallpostbyacategory"
              break;
            case 85:
                /* serviceMainClass = "getallpostbyacategoryTwoColumns" */
                serviceMainClass = "getallpostbyacategory"
                break;
            default:
                serviceMainClass = "getallpostbyacategory"
              break;
          }
          return serviceMainClass
    }

function serviceClass (category) {
    let spanServiceClass
    switch (category) {
        case 2:
            spanServiceClass = <span id={ categoryName } className="neutro">{categoryName}</span>
          break;
        case 3:
            spanServiceClass = <span id={ categoryName } className="neutro">{categoryName}</span>
          break;
        case 20:
            spanServiceClass = <span id={ categoryName } className="neutro">{categoryName}</span>
          break;
        case 85:
            spanServiceClass = <span id={ categoryName } className="neutro">{categoryName}</span>
            break;
        default:
            spanServiceClass = <span id={ categoryName } className="neutro">{categoryName}</span>
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

    //const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setAllPostByCategory(responseJSON)          
    //}

    //useEffect(()=>{peticionGET(), [i18n.language]})

    useEffect(()=>{ Axios.get(URI_IDI_PAGE).then(response => {setAllPostByCategory(response.data);});}, [setAllPostByCategory])

    return (

       <div className= { serviceMainClass (category) } >
            
        <div className="getallpostbyacategory__cabecera">
            { serviceClass (category) } 
        </div>

            {
                !allpostbycategory ? <strong>{t('description.loading')}</strong>:
                (
                    allpostbycategory.map(((allpostbycategory) => (
                        <div className="getallpostbyacategory__item" key={allpostbycategory.id} id={allpostbycategory.id} dangerouslySetInnerHTML={
                            { __html: `
                            <a id="info" href=getproject/${allpostbycategory.slug}/${category}>
                            <figure>
                                <img style="max-width:100%;" aria-label="${allpostbycategory.title.rendered}" 
                                alt="${allpostbycategory.title.rendered}" 
                                title="${allpostbycategory.title.rendered}" 
                                src=${allpostbycategory._embedded['wp:featuredmedia'][0].source_url} />
                                <figcaption>${allpostbycategory.title.rendered}</figcaption>
                            </figure>
                            </a>
                            `}
                            }/>)
                            ))
                )
            } 
        </div>
    )
}