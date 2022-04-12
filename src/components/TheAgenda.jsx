import React from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
export default function TheAgenda() {
    const { i18n } = useTranslation()
    const currentLanguage = i18n.language

   
    return (
        <div>
         {
                
           <div dangerouslySetInnerHTML={ 
               { __html:`
               <iframe src= "https://utils.idi.es/index.php/agenda_ctrl/muestraEnIframe/${currentLanguage}" id="theAgenda" name="theAgenda" width="100%" height="1420px" frameBorder="0"/>`}
            } /> 
         }
        </div>
    )
}
