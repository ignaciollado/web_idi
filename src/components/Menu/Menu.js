import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
const Menu = ({ open, ...props }) => {
const isHidden = open ? true : false;
const tabIndex = isHidden ? 0 : -1;
const { t } = useTranslation()

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
  <a tabIndex={tabIndex} href="/propuestas-abiertas" rel="noopener noreferrer">{t('description.work')}</a>
  <a tabIndex={tabIndex} href="/"><span aria-hidden="true" role="img" aria-label="About us">💁🏻‍♂️</span>{t('description.about')}</a>
  <a tabIndex={tabIndex} href="/que-hace-el-idi">{t('description.explore')}</a>
  <a tabIndex={tabIndex} href="/contactar"><span aria-hidden="true"  role="img" aria-label="Contact us">📩</span>{t('description.contactUs')}</a>
  <a tabIndex={tabIndex} href="/noticias-blog">{t('description.news')}</a>

    </StyledMenu>
  )
}

Menu.propTypes = {
 open: bool.isRequired,
}

export default Menu;