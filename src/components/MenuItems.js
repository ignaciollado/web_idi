import React from 'react'
import { useState } from "react"
import '../css/submenuitems.css'
import Dropdown from "./Dropdown"
import { useTranslation } from 'react-i18next';

const MenuItems = ( {items} )  => {
    const { t } = useTranslation();
    const [dropdown, setDropdown] = useState(false);
    
    return ( <span className="menu-items">

                <a  aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}>
                    {t('description.whatWeDo').toLocaleUpperCase()}{" "}
                </a>
                <Dropdown submenus={items.submenu} dropdown={dropdown}/>

            </span>
    );
};

export default MenuItems;