import React from 'react'
import useTranslation from '../useTranslation';

export const Contact = () => {
  const { t } = useTranslation();


  return (
    <div id="Contact">
        <h2>{t("contact")}</h2>
        <div>
            <img src="/images/contact.png" alt="contact"></img>
            <div>
                <h4>{t("name")}</h4>
                <p>770-367-1533</p>
                <p>sangkyu.kim67@gmail.com</p>
            </div>
        </div>
    </div>
  )
}
