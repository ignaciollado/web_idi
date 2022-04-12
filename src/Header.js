import React, { useEffect, useState, useRef } from 'react'
import Search from './components/FormSubmission'
import { useScroll } from './hooks/useScroll'
import './css/header.css'
import logo from './images/logo-idi-negro.jpg'
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
import { ThemeProvider } from  'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { menuItems } from "./components/menuItem"
import MenuItems from "../src/components/MenuItems";
const lngs = {
    //en: { nativeName: 'ENG' },
    es: { nativeName: 'ESP' },
    ca: { nativeName: 'CAT'}
  };

export default function Header() {
    const { t, i18n } = useTranslation();
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScroll();
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

    return (
   
<nav aria-label="main navigation" className={navClassList.join(" ")} >

        <div tabIndex="0" className="header">
        <ThemeProvider theme={theme} >
          <GlobalStyles />
          <div ref={node} className="header__menu__hamburguer">
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </ThemeProvider>

        <div tabIndex="0" className="header__menu__logo">
            <a href="/"><img src={logo} alt={t('description.idi1')+' '+t('description.idi2')} title ={t('description.idi1')+' '+t('description.idi2')}/></a>
        </div>

        <div tabIndex="0" className="header__nav_main">
                <ul className='menus'>
                    <li><a className="" href="/quienes-somos">{t('description.about')}</a></li>
                    {menuItems.map((menu, index) => {
                      return <MenuItems items={menu} key={index} />;
                    })}
                   {/*  <li><a className="" href="/que-hace-el-idi">{t('description.explore')}</a></li> */}
                    <li><a className="" href="/noticias-blog">{t('description.news')}</a></li>
                    <li><a className="" href="/the-agenda">{t('description.agenda')}</a></li>
                    <li><a className="" href="/ayudas-subvenciones">{t('description.grantSubsidies')}</a></li>
                    <li><a className="" href="/transparencia">{t('description.openness')}</a></li>
                    <li><a className="" href="https://www.caib.es/seucaib/">{t('description.electronicOffice')}</a></li>
                    {/* <li><a className="" href="/contactar">{t('description.contactUs')}</a></li> */}
                </ul>    
        </div>

        
        <Search />
    

        {/*<div tabIndex="0" className="header__nav_aux">
            <nav aria-label="main navigation">
                <ul> 
                    <li><a className="" href="/transparencia">{t('description.openness')}</a></li>
                   <li><a className="" href="/sede-electronica">{t('description.electronicOffice')}</a></li>
                    <li></li>
                </ul>
           </nav>
        </div>*/}

         <div tabIndex="0" className="header__nav_language">
            <nav aria-label="main navigation">
                <ul>
                    <li>
                    {Object.keys(lngs).map((lng) => (
                        <button className="header__language" key={lng} style={{ fontWeight: i18n.language === lng ? '800' : 'normal' }} type="submit" onClick={() => {i18n.changeLanguage(lng); window.location.reload();}}>
                        { lngs[lng].nativeName } 
                        </button>
                    ))}
                    </li>
                </ul>
            </nav>
        </div>
  </div>
</nav>  

    )
}