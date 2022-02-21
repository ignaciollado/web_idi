import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------

import { useState, useEffect } from 'react'
import '../css/contact.css'


export default function SendContactMail() {
    const { messageToSend } = useParams()
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language
    let URI_IDI_PAGE = ''

    switch (currentLanguage) {
        case 'en':
        case 'es':
            URI_IDI_PAGE = `https://app.idi.es/mail-send.php?emailContents=${messageToSend}`
            //URI_IDI_PAGE = `https://app.idi.es/wp-includes/pluggable.php?emailContents=${messageToSend}`
            break;
        default:
            URI_IDI_PAGE = `https://app.idi.es/mail-send.php?emailContents=${messageToSend}`
            //URI_IDI_PAGE = `https://app.idi.es/wp-includes/pluggable.php?emailContents=${messageToSend}`
          break;
    }
    
    const [theEmailMessage, settheEmailMessage] = useState()

    useEffect(()=>{
        Axios.get(URI_IDI_PAGE).then(
            response => {
                settheEmailMessage(response.data.split("#"));
            }
          );  
    }, [settheEmailMessage])

    return (
        <div className="tagspage__grid">
        {
            !theEmailMessage ? <strong>{t('description.sendingMessage')}</strong>:

                <div id={theEmailMessage[0]} dangerouslySetInnerHTML={{ 
                
                __html:`
                <div><h2>${theEmailMessage[0]}</h2></div>
                <div><h4>${t('description.sendingMessageFrom')} ${theEmailMessage[1]}</h4></div>
                <div><h4>${t('description.sendingMessageSubject')} ${theEmailMessage[2]}</h4></div> 
                <div><h4>${t('description.sendingMessageContent')} ${theEmailMessage[3]}</h4></div> <hr><br>
                <div><h5>${t('description.sendingMessageReceiveCopyInYourMail')}</h5></div>
                <div><h5>${t('description.sendingMessageThankYouForContactingUs')}</h5></div>
                <div><h5>${t('description.sendingMessageWeWillResponAsap')}</h5></div>
                `}}/>
        }
        </div>
    )
}