//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------


export const menuItems = [
    {
     title: 
     function() {
       const { t } = useTranslation()
       return `${t('description.whatWeDo')}`
     },
     submenu: [
      {
       title:  'Serveis actius',
       url: '/'
      },
      {
       title: 'Històric',
       url: '/que-hace-el-idi'
      }
     ],
     title: 'Notíciesss',
     url: '/noticias-blog'
    },
    
   ];