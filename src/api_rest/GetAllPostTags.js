import React, { useState, useEffect } from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
import '../css/tagspage.css'
import Axios from 'axios'
import { ContactlessOutlined } from '@material-ui/icons'

export default function GetAllPostTags(props) {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''
    var actualFirstTagLetter = ''
    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/${currentLanguage}/wp-json/wp/v2/tags?order=asc&per_page=100`
            break;
        default:  //Es el idioma por defecto establecido en Wordpress
            URI_IDI_PAGE = `https://app.idi.es/wp-json/wp/v2/tags?order=asc&per_page=100`
          break;
        }
    const [allPostTags, setAllPostTags] = useState()
    
    //const allTagsFETCH = async ()=> {
    //    const parsedTags = await fetch(URI_IDI_PAGE)
    //    const responseJSON = await parsedTags.json()
    //    setAllPostTags(responseJSON)        
    //    }

    function createItemsFromTags (theTags) {
        let itemTags = ''
        theTags.map(tag => 
            {
                let firstTagLetter = tag.name.charAt(0)

                if (actualFirstTagLetter.toUpperCase() !== firstTagLetter.toUpperCase()) {
                   itemTags += '</div><div class="tagspage__item"> <span class="tagspage__item__capitalletter">'+firstTagLetter+'</span><br>'
                   actualFirstTagLetter = firstTagLetter
                }
                //if (tag.count > 0) {
                   itemTags += `<span><a href=/getpostbytag/${tag.id}>${tag.name}   [${tag.count}]</a></span><br>`
                //}
                return itemTags
            })
        return itemTags
    }

    //useEffect(()=>{allTagsFETCH()})

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                setAllPostTags(response.data);
            }
          );  
    }, [setAllPostTags])

    return (
        <div>
        <div className='tagspageheader'>{t('description.exploreTheIDIServices')}</div><hr></hr> 
            {
            !allPostTags ? <strong>{t('description.exploringIDI')}</strong>:  
            <div className="tagspagecontent" dangerouslySetInnerHTML = 
                    {
                    { __html: createItemsFromTags (allPostTags)}
                    }/>
            }
        </div>
    )
}
