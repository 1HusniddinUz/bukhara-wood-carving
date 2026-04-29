import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { company } from "../../data/company";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/products", label: t("nav.products") },
    { path: "/marketplace", label: t("nav.marketplace") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="footer">
      <div className="footer__grain" />

      <div className="container">
        <div className="footer__shell">
          <div className="footer__brand">
            <Link to="/" className="footer__mark">
              <span>BWC</span>
            </Link>

            <div className="footer__brandText">
              <strong>{company.brand}</strong>
              <p>{t("footer.text")}</p>
            </div>
          </div>

          <div className="footer__sculpture" aria-hidden="true">
            <div className="footer__ring footer__ring--one" />
            <div className="footer__ring footer__ring--two" />
            <div className="footer__plate">
              <span>ASH</span>
            </div>
          </div>

          <div className="footer__grid">
            <div className="footer__group">
              <span className="footer__label">Menu</span>

              <ul>
                {navLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__group">
              <span className="footer__label">{t("footer.contact")}</span>

              <ul>
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>

                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:+${phone}`}>+{phone}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__group">
              <span className="footer__label">{t("footer.social")}</span>

              <ul>
                <li>
                  <a href={company.telegram} target="_blank" rel="noreferrer">
                    Telegram
                  </a>
                </li>

                <li>
                  <a href={company.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>

                <li>
                  <span>{company.facebook}</span>
                </li>
              </ul>
            </div>

            <div className="footer__group footer__group--address">
              <span className="footer__label">Studio</span>

              <p>{company.address}</p>
            </div>
          </div>

          <div className="footer__bottom">
            <span>
              © {year} {company.brand}. {t("footer.rights")}
            </span>

            <span>{company.legalName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}