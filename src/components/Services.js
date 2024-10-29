import React from 'react'
import useTranslation from '../useTranslation';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <div id="Services">
        <h2>{t("services")}</h2>
        <span>{t("servicesText")}</span>
        <div id="servicesBox">
            <div id="electrical"><span>{t("electrical")}</span></div>
            <div id="plumbing"><span>{t("plumbing")}</span></div>
            <div id="hvac"><span>{t("hvac")}</span></div>
            <div id="repairs"><span>{t("repairs")}</span></div>
            <div id="flooring"><span>{t("flooring")}</span></div>
            <div id="basement"><span>{t("basement")}</span></div>
            <div id="kitchen"><span>{t("kitchen")}</span></div>
            <div id="bathrooms"><span>{t("bathrooms")}</span></div>
            <div id="decks"><span>{t("decks")}</span></div>
            <div id="more"><span>{t("more")}</span></div>
        </div>
    </div>
  )
}
