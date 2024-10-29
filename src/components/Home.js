import React from "react";
import useTranslation from '../useTranslation';
export const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="Home">
      <div id="homeContent">
        <img src="/images/skye.png" alt="logo" id="logo" />
        <div className="homeText">
          <h2>{t("welcome")}</h2>
          <p>
          {t("homeDescription")}
          </p>
          <h4>{t("name")}</h4>
          <p>770-367-1533 | sangkyu.kim67@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

