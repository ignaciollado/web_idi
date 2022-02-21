import React from 'react'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
export default function GrantsAndSubsidies() {
    const { i18n } = useTranslation()
    const currentLanguage = i18n.language

   
    return (
        <div>
         {
                
           <div dangerouslySetInnerHTML={ 
               { __html:`

               <iframe src="https://idi.es/index.php/ayud_subv/muestraEnIframe/${currentLanguage}" id="ayud-subven" name="ayud-subven" width="100%" height="1024px" frameBorder="0"/>`}
            } /> 
         }
        </div>
    )
}
