import React from 'react'
import { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
import QuienesSomosExplora from '../components/QuiSomExplora'
import ServicesCategories from './GetAllPostByACategory'
import Axios from 'axios'

export default function GetAllCategoriesByParent(props) {
    const { theMainCategory, theCategoryExcluded } = props
    const [allsubcategories, setallsubcategories] = useState()
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let  URI_IDI_PAGE = ''
    
    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/categories?parent=${theMainCategory}&exclude=${theCategoryExcluded}&orderby=slug`
            break;
        default: //Es el idioma por defecto establecido en Wordpress (en este caso es el catalán)
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/categories?parent=${theMainCategory}&exclude=${theCategoryExcluded}&orderby=slug`
            break;
      }

    // alert (URI_IDI_PAGE)
    // const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setallsubcategories(responseJSON)          
    //}

    //useEffect(()=>{peticionGET()})

    // Uso AXIOS, ya que de la otra forma no consigo hacer que funcione
    // Getting all subcategories from theMainCategory

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setallsubcategories(response.data);
            }
          );  
    }, [setallsubcategories])

    return (
        <div>
            <QuienesSomosExplora />
            <div className='app__header__2'>{t('description.noEstasEnElMenu')}</div>
            <div className='app__header__3'><a href="/contactar">{t('description.haznosUnPropuesta')}</a></div>
        {
        !allsubcategories ? <strong>{t('description.loading')}</strong>:
               (
                allsubcategories.map((allsubcategories) => (
                    // its a tree search
                    // Getting all the SubCategories from the subcategories of theMainCategory
                    // theMainCategory is 'IDI'
                    // the sub categories from the main: 'amb els ajuntaments', 'amb els centres educatius', 'amb l'emprenedoria' ...
                    // Now getting the subCategories from, for example: 'amb els ajuntaments' -> 'Productes de form', 'Comerços emblematics', 'iComerç'
                    <ServicesCategories categoryName={allsubcategories.name} category ={allsubcategories.id}/>
                ))
               )
        }
        </div>
    )
}