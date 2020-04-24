import React from "react";
import "./navBar.css";

import { useTranslation } from "react-i18next";
function NavBar({ selectLang, selectedLanguage }) {
  const { t, i18n } = useTranslation();

 const selectedLanguages = (lang) => {
    i18n.changeLanguage(lang);
    // console.log('lang',i18n.language)
  };
  return (
    <div className={`navbar  ${i18n.language}`}>
      <div className='container'>
        <div className='grid-container'>
          <div className='logo'>
            <h2>
            {t('navbar.logo')}
              {/* <FormattedMessage id='logo' /> */}
            </h2>
          </div>

          <input id='label-nav' type='checkbox' />
          <label htmlFor='label-nav'> </label>

          <ul className='list'>
            <li className='list-item'> {t('navbar.Home')}</li>
            <li className='list-item'>
            {t('navbar.Profile')}</li>
            <li className='list-item'>{t('navbar.About')}</li>
            <li className='list-item'>{t('navbar.Content')}</li>
            <li className='list-item'>{t('navbar.Try')}</li>
            <select
              onChange={(e) => selectedLanguages(e.target.value)}
              value={i18n.language}
            >
              <option value='ar'>العربية</option>
              <option value='en'>English</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default NavBar;
