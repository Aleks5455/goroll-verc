import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className="partners">
      <h2 id="partners">
        {t("partnersTitle1")} <span>{t("partnersTitle2")}</span>
      </h2>

      <div className="partners__cards">
        <div className="card card_1">
          <h3 className="card__title">{t("card1Title")}</h3>
          <ul className="card__features">
            <li>{t("card1Feature1")}</li>
            <li>{t("card1Feature2")}</li>
          </ul>

          <div className="card__results">
            <h4>{t("card1ResultTitle")}</h4>
            <p>{t("card1ResultText")}</p>
          </div>
        </div>
        <div className="card card_2">
          <h3 className="card__title">{t("card2Title")}</h3>
          <ul className="card__features">
            <li>{t("card2Feature1")}</li>
            <li>{t("card2Feature2")}</li>
          </ul>

          <div className="card__results">
            <h4>{t("card2ResultTitle")}</h4>
            <p>{t("card2ResultText")}</p>
          </div>
        </div>
        <div className="card card_3">
          <h3 className="card__title">{t("card3Title")}</h3>
          <ul className="card__features">
            <li>{t("card3Feature1")}</li>
            <li>{t("card3Feature2")}</li>
          </ul>

          <div className="card__results">
            <h4>{t("card3ResultTitle")}</h4>
            <p>{t("card3ResultText")}</p>
          </div>
        </div>
        <div className="card card_4">
          <h3 className="card__title">{t("card4Title")}</h3>
          <ul className="card__features">
            <li>{t("card4Feature1")}</li>
            <li>{t("card4Feature2")}</li>
          </ul>

          <div className="card__results">
            <h4>{t("card4ResultTitle")}</h4>
            <p>{t("card4ResultText")}</p>
          </div>
        </div>
      </div>

      <a href="#" className="promo__btn partners__btn">
        {t("becomePartner")}
      </a>
    </div>
  );
};

export default Partners;
