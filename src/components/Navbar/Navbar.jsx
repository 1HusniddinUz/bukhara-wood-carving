import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { company } from "../../data/company";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { path: "/", label: t("nav.home"), number: "01" },
    { path: "/products", label: t("nav.products"), number: "02" },
    { path: "/marketplace", label: t("nav.marketplace"), number: "03" },
    { path: "/about", label: t("nav.about"), number: "04" },
    { path: "/contact", label: t("nav.contact"), number: "05" },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container">
          <nav className="navbar__shell" aria-label="Main navigation">
            <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
              <div className="navbar__brand-mark">
                <span>BWC</span>
              </div>

              <div className="navbar__brand-copy">
                <strong>{company.brand}</strong>
                <small>{company.activity}</small>
              </div>
            </NavLink>

            <div className={`navbar__center ${open ? "navbar__center--open" : ""}`}>
              <ul className="navbar__menu">
                {navItems.map((item) => (
                  <li key={item.path} className="navbar__item">
                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "navbar__link navbar__link--active"
                          : "navbar__link"
                      }
                    >
                      {/* <span className="navbar__link-number">{item.number}</span> */}
                      <span className="navbar__link-text">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="navbar__mobileExtras">
                <div className="navbar__mobileLine">
                  <span>{company.address}</span>
                </div>

                <div className="navbar__mobileActions">
                  <select
                    className="navbar__language"
                    value={i18n.language}
                    onChange={changeLanguage}
                    aria-label="Select language"
                  >
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                    <option value="tr">TR</option>
                  </select>

                  <NavLink
                    to="/contact"
                    className="navbar__cta"
                    onClick={closeMenu}
                  >
                    {t("nav.order")}
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="navbar__right">
              <select
                className="navbar__language navbar__language--desktop"
                value={i18n.language}
                onChange={changeLanguage}
                aria-label="Select language"
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="tr">TR</option>
              </select>

              <NavLink to="/contact" className="navbar__cta navbar__cta--desktop">
                {t("nav.order")}
              </NavLink>

              <button
                className={`navbar__burger ${open ? "navbar__burger--active" : ""}`}
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`navbar__backdrop ${open ? "navbar__backdrop--show" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
}