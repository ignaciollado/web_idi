import React from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/formatpost.css'
import Axios from 'axios'

export default function GetPageByID() {
    const {id} =  useParams()
    const {category} = useParams()
    let categoryClass

    switch (category) {
        case '2':
            categoryClass = "emprendedor";
          break;
        case '3':
            categoryClass = "empresa";
          break;
        case '20':
            categoryClass = "ayuntamiento";
          break;
        case '85':
            categoryClass = "centroEducativo";
            break;
        default:
            categoryClass = "";
          break;
      }

    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/posts?_embed&slug=${id}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/posts?_embed&&slug=${id}`
            break;
      }

    // alert (URI_IDI_PAGE)

    const [postContent, setPostContent] = useState()

    // const pageGET = async ()=>{
    // const parsedPage = await fetch(URI_IDI_PAGE)
    //                            .then (response => response.json())
    //                            .then (data => {
    //                                return {__html: `<h1 class='entry-title'>${data.title.rendered}</h1><div class='detail-content'>${data.content.rendered}</div>`};
    //                                });
    //                            setpageContent(parsedPage)    
    //}

    function iterateCategorySubnodes (objeto) {
        let itemTags = []
        for (var i = 0; i < objeto.length; i++) {
            itemTags.push(`<a href=/getpostbycategory/${objeto[i].id}><span className="${ categoryClass }">${objeto[i].name}</span> </a>`) 
        } 
        return itemTags
     }

    function iterateTagSubnodes (objeto) {
        let itemTags = []
        for (var i = 0; i < objeto.length; i++) {
            itemTags.push(` <a href=/getpostbytag/${objeto[i].id}> <span className="${ categoryClass }">${objeto[i].name}</span> </a> `) 
        }
        return itemTags
     }

     function iterateTagSubnodesInstagramStyle (objeto) {
        let itemTags = []
        for (var i = 0; i < objeto.length; i++) {
            itemTags.push(` <span className="${ categoryClass }" >${"#"+objeto[i].name.replace(/\s+/g, '').toLowerCase()}</span> `) 
        }
        return itemTags
     }


    // useEffect(()=>{pageGET()})

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setPostContent(response.data);
            }
          );  
    }, [setPostContent])

    return (

        <div className="formatpost">
            {
                !postContent ? <strong>{t('description.loadingNews')}</strong>:
                postContent.map(((postContent) => (
                        <div 
                            className="formatpost__project" 
                            id={postContent.id} 
                            dangerouslySetInnerHTML={
                                { __html: `
                                
                                <div>
                                   <span class="categories">${ iterateCategorySubnodes (postContent._embedded['wp:term'][0], ) }</span> 
                                </div>  

                                <div>
                                    <figure>
                                        <img aria-label="${postContent.title.rendered}" alt="${postContent.title.rendered}" title="${postContent.title.rendered}" src=${postContent._embedded['wp:featuredmedia'][0].source_url}>
                                        <figcaption></figcaption>
                                    </figure>
                                </div>

                                <div class="formatpost__project_title_tags">
                                    <div>
                                        ${postContent.title.rendered}
                                    </div>
                                    <div>
                                        ${ iterateTagSubnodes (postContent._embedded['wp:term'][1]) }<br>
                                        ${ iterateTagSubnodesInstagramStyle (postContent._embedded['wp:term'][1]) }
                                    </div>
                                </div>

                                <div>
                                    <article>${postContent.content.rendered}</article>
                                </div>
                                   
                                `}}
                        />
                        )))       
            }
                        </div>
    
    )
}