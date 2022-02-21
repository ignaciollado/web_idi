import React from 'react'
import { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------

import ServicesCategories from './GetAllPostByAService'
import Axios from 'axios'

export default function GetAllCategoriesByParent(props) {
    const { theMainCategory, categoryExcluded } = props
    const [allsubcategories, setallsubcategories] = useState()
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let  URI_IDI_PAGE = ''
    
    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/categories?parent=${theMainCategory}&&exclude=${categoryExcluded}`
            break;
        default: //Es el idioma por defecto establecido en Wordpress (en este caso es el catalán)
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/categories?parent=${theMainCategory}&&exclude=${categoryExcluded}`
            break;
      }

    // alert (URI_IDI_PAGE)

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
        !allsubcategories ? <strong>{t('description.loading')}</strong>:
               (
                allsubcategories.map((allsubcategories) => (
                    // its a tree search
                    // Getting all the SubCategories from the subcategories of theMainCategory
                    // theMainCategory is 'SERVEIS IDI'
                    // the sub categories from the main: 'amb els ajuntaments', 'amb els centres educatius', 'amb l'emprenedoria' ...
                    // Now getting the subCategories from, for example: 'amb els ajuntaments' -> 'Productes de form', 'Comerços emblematics', 'iComerç'
                    <ServicesCategories categoryName={allsubcategories.name} category ={allsubcategories.id}/>
                ))
               )
    )
}