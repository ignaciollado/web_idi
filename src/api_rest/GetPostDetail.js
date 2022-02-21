import React from 'react'
import { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
import '../css/formatpostset.css'
import Axios from 'axios'

export default function GetPostSet(props) {
    const {totalPages, theCategory} = props
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_fields[]=categories&_fields[]=lang&_fields[]=tags&_fields[]=content&_fields[]=link&_fields[]=title&_fields[]=date&_fields[]=id&per_page=${totalPages}&categories=${theCategory}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_fields[]=categories&_fields[]=lang&_fields[]=tags&_fields[]=content&_fields[]=link&_fields[]=title&_fields[]=date&_fields[]=id&per_page=${totalPages}&categories=${theCategory}`
            break;
      }
      
    //alert (URI_IDI_PAGE)
    const [postSet, setPostSet] = useState()

    //const peticionGET = async ()=>{
    //    const response = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await response.json()
    //    setPostSet(responseJSON)          
    // }

    // useEffect(()=>{peticionGET()},[])
    //Lo hago con Axios:
    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setPostSet(response.data);
            }
          );  
    }, [setPostSet])

    return (
        <div className="postSetgrid">
            {
                !postSet ? <strong>{t('description.loadingNews')}</strong>:
                postSet.map(((postSet) => (<div id={postSet.id} dangerouslySetInnerHTML={{ __html: `<h1>${postSet.title.rendered}</h1> <article>${postSet.content.rendered}</article><span><a href=${postSet.categories}>${postSet.categories}</a></span><span><a href=${postSet.tags}>${postSet.tags}</a></span><hr/>`}}/>)))
            }
       
        </div>
    )
}
