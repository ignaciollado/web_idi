import React from 'react'

import { FcPhone } from 'react-icons/fc'
/* import { GrMail } from 'react-icons/gr' */
import logo from './images/logo-idi-negro-footer.jpg'

import './css/footer.css'

//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
export default function Footer() {
    const { t } = useTranslation()
    return (

<footer>

    {/* <div className="text-left block-hablemos">
        <div id="content-hablemos" className="footer__container_hablemos">
            
            <div className="footer__container_hablemos_whatsapp">
                <a id="whatsapp" rel="nofollow noopener noreferrer" target="_blank" href="https://wa.me/34677234076?text=Buenos días, ¿cómo le podemos ayudar?" 
                type="button" className="btn-hablemos"><BsFillChatFill /> 971 17 61 61</a>            
            </div>
                   
            <div className="footer__container_hablemos_telefono">
                <a id="tel" rel="nofollow noopener noreferrer" target="_blank" href="tel:+34971176161" type="button" className="btn-hablemos"><FcPhone /> 971 17 61 61</a>
            </div>
        
            <div className="footer__container_hablemos_mail">
                <a id="email" rel="nofollow noopener noreferrer" target="_blank" href="mailto:info@idi.es" type="button" className="btn-hablemos"><GrMail /> info@idi.es</a>
            </div>

        </div>
    </div> */}


    <div>
        <a href="/"><img src={logo} alt={t('description.idi1')+' '+t('description.idi2')} title ={t('description.idi1')+' '+t('description.idi2')}/></a>
    </div>
    
    <div>
        <span><strong>{t('description.idi1')}</strong></span>
        <span><strong>{t('description.idi2')}</strong></span>
        <span>Plaça de Son Castelló, 1</span>
        <span>07009 - Palma de Mallorca</span>
        <span>Illes Balears</span>
        <span><a id="tel" rel="nofollow noopener noreferrer" target="_blank" href="tel:+34971176161" type="button" className="btn-hablemos"><FcPhone /> 971 17 61 61</a>
</span>
    </div>

    <div>
        <a href="http://twitter.com/IDIbalears">Twitter</a>
        <a href="https://www.instagram.com/idi_balears/">Instagram</a>
        <a href="http://www.facebook.com/IDI.Institutinnovacio">Facebook</a>
        <a href="https://www.linkedin.com/company/idi-istitut-innovaci-empresarial-illes-balears/?viewAsMember=true">Linkedin</a>
        <a href="http://www.youtube.com/user/InstitutInnovacio?feature=mhee">Youtube</a>
    </div>

    <div>
        <a className="" href="/contactar">{t('description.contactUs')}</a>
        <a className='' href="/accesibilidad">{t('description.accesibilidad')}</a>               
        <a className='' href="/aviso-legal">{t('description.legalAdvice')}</a>
        <a className='' href="/politica-de-pricacidad">{t('description.privacyPolicy')}</a>
        <a className='' href="/politica-de-cookies">{t('description.cookiesPolicy')}</a>
    </div>
</footer>

    )
}
