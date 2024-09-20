import { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

type Language = "ru" | "en" | "es" | "ua";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>("en");
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => setIsLangOpen(!isLangOpen);

  const handleLangClick = (lang: Language) => {
    setSelectedLang(lang.toLocaleLowerCase() as Language);
    setIsLangOpen(false);
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <header className="header">
        <a href="#!" className="logo">
          <img src="logo.svg" alt="logo" />
        </a>
        {isMenuOpen ? (
          <nav className="nav open">
            <ul className="nav-list">
              <li className="nav-list__item">
                <a href="#partners" className="anchor" onClick={toggleMenu}>
                  {t("partners")}
                </a>
              </li>
              <li className="nav-list__item">
                <a href="#geo" className="anchor" onClick={toggleMenu}>
                  {t("geo")}
                </a>
              </li>
              <li className="nav-list__item">
                <a href="#about" className="anchor" onClick={toggleMenu}>
                  {t("contact")}
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list__item">
                <a href="#partners" className="anchor">
                  {t("partners")}
                </a>
              </li>
              <li className="nav-list__item">
                <a href="#geo" className="anchor">
                  {t("geo")}
                </a>
              </li>
              <li className="nav-list__item">
                <a href="#about" className="anchor">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </nav>
        )}

        <div className="menu">
          <a href="#" className="user">
            <img src="user.svg" alt="user" />
          </a>
          <a href="#" className="menu__btn">
            {t("becomePartner")}
          </a>
          <div className="lang">
            <img src="div.svg" alt="" />
            <div className="lang-selector" onClick={toggleDropdown}>
              <ul className="lang-list">
                <li
                  onClick={isLangOpen ? () => handleLangClick("ru") : undefined}
                >
                  {isLangOpen ? "RU" : selectedLang.toLocaleUpperCase()}
                </li>
                {isLangOpen && (
                  <>
                    <li onClick={() => handleLangClick("en")}>EN</li>
                    <li onClick={() => handleLangClick("es")}>ES</li>
                    <li onClick={() => handleLangClick("ua")}>UA</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="burger active" onClick={toggleMenu}>
            <span></span>
          </div>
        ) : (
          <div className="burger" onClick={toggleMenu}>
            <span></span>
          </div>
        )}

        {/* Условное рендеринг меню */}
        {/* {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#partners">Для партнеров</a>
            </li>
          </ul>
        </div>
      )} */}
      </header>

      {/* <div className="promo">
        <h1>Прямой рекламодатель <span>iGaming</span> с высокими ставками</h1>
        <div className="promo__text">
            <span> и локализацией</span> <span>для вашего гео</span>
        </div>
        <a href="#" className="promo__btn">Стать партнером</a>
      </div>
      
      <div className="laptops">
        <img className="laptop" src="laptop.png" alt="background" />
        <img className="laptop_m" src="laptop_m.png" alt="background" />
      </div> */}
    </div>
  );
};

export default Header;
