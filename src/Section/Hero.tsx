import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="raw">
      <div className="promo">
        <h1>
          {t("promoTitle1")} <span>{t("promoTitle2")}</span> {t("promoTitle3")}
        </h1>
        <div className="promo__text">
          <span>{t("promoSubtitle1")}</span> <span>{t("promoSubtitle2")}</span>
        </div>
        <a href="#" className="promo__btn">
          {t("becomePartner")}
        </a>
      </div>

      <div className="laptops">
        <img className="laptop" src="laptop.png" alt="background" />
        <img className="laptop_m" src="laptop_m.png" alt="background" />
      </div>
    </div>
  );
};

export default Hero;
