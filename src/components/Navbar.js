import React from 'react'
import useTranslation from '../useTranslation';
import { useLanguage } from '../LanguageContext';
import { useState } from "react"

export const Navbar = () => {
    const { t } = useTranslation();
    const { changeLanguage } = useLanguage();

    const [isKorean, setIsKorean] = useState(true)

    const changeToEn = () => {
        changeLanguage('en')
        setIsKorean(false)
    }

    const changeToKr = () => {
        changeLanguage('kr')
        setIsKorean(true)
    }

    return (
    <div id="Navbar">
        <div id="divFirstNav">
            <img id="logoNav" src="/images/skye2.png" alt="SKYE CONTRACTOR INC."></img>
            <a href="#Home" id="homeNav">{t("home")}</a>
            <a href="#Services" id="servicesNav">{t("services")}</a>
            <a href="#Gallery" id="galleryNav">{t("gallery")}</a>
            {isKorean && (
                <img className="enkr" src="/images/enkr.webp" onClick={changeToEn}></img>)}
            {!isKorean && (
                <img className="enkr" src="/images/enkr.webp" onClick={changeToKr}></img>)}
        </div>
        <div>
            <a href="#Contact" id="contactNav">{t("contact")}</a>
        </div>
    </div>
  )
}
