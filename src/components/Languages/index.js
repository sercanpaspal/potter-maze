import React from 'react';
import Button from "../Button";
import styles from "./index.module.css";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

const Languages = () => {
  const { i18n: { language } } = useTranslation()
  return (
    <div className={styles.languages}>
      <Button small={true} active={language === 'tr'} onClick={() => i18n.changeLanguage('tr')}>türkçe</Button>
      <Button small={true} active={language === 'en'} onClick={() => i18n.changeLanguage('en')}>english</Button>
    </div>
  );
};

export default Languages;