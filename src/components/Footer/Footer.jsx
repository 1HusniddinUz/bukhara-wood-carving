import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaTelegram, FaInstagram, FaFacebookF } from "react-icons/fa6";
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
              <img src="/logo.png" alt={company.brand} />
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
                  <a href={`mailto:${company.email}`} className="footer__line">
                    <FiMail aria-hidden="true" />
                    <span>{company.email}</span>
                  </a>
                </li>

                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:+${phone}`} className="footer__line">
                      <FiPhone aria-hidden="true" />
                      <span>+{phone}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__group">
              <span className="footer__label">{t("footer.social")}</span>

              <ul>
                <li>
                  <a
                    href={company.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__line"
                  >
                    <FaTelegram aria-hidden="true" />
                    <span>Telegram</span>
                  </a>
                </li>

                <li>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__line"
                  >
                    <FaInstagram aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                </li>

                <li>
                  <span className="footer__line">
                    <FaFacebookF aria-hidden="true" />
                    <span>{company.facebook}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="footer__group footer__group--address">
              <span className="footer__label">Studio</span>

              <p className="footer__line footer__line--address">
                <FiMapPin aria-hidden="true" />
                <span>{company.address}</span>
              </p>
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