import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { menuItems } from "../../components/menuItem";
import MenuItems from "../../components/MenuItems";
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
const Menu = ({ open, ...props }) => {
const isHidden = open ? true : false;
/* const tabIndex = isHidden ? 0 : -1; */
const { t } = useTranslation()

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      
      <a className='' href='/'>Home</a>
      <a className="" href="/quienes-somos">{t('description.about')}</a>
      {menuItems.map((menu, index) => {
                      return <MenuItems items={menu} key={index} />;
                    })}
      <a className="" href="/noticias-blog">{t('description.news')}</a>
      <a className="" href="/theAgenda">{t('description.agenda')}</a>
      <a className="" href="/ayudas-subvenciones">{t('description.grantSubsidies')}</a>
      <a className="" href="/transparencia">{t('description.openness')}</a>
      <a className="" href="https://www.caib.es/seucaib/">{t('description.electronicOffice')}</a>

    </StyledMenu>
  )
}

Menu.propTypes = {
 open: bool.isRequired,
}

export default Menu;