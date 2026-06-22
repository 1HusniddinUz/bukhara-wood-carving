import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal/Reveal";
import { products } from "../../data/products";
import workDoor from "../../assets/images/10.png";
import workPanel from "../../assets/images/3.png";
import workGift from "../../assets/images/9.png";
import "./Home.css";

const showcases = [
  {
    title: {
      uz: "O‘yma eshiklar",
      ru: "Резные двери",
      en: "Carved doors",
      fr: "Portes sculptées",
      tr: "Oyma kapılar",
    },
    label: {
      uz: "Interyer",
      ru: "Интерьер",
      en: "Interior",
      fr: "Intérieur",
      tr: "İç mekân",
    },
    image: workDoor,
  },
  {
    title: {
      uz: "Yog‘och panellar",
      ru: "Деревянные панели",
      en: "Wood panels",
      fr: "Panneaux en bois",
      tr: "Ahşap paneller",
    },
    label: {
      uz: "Dekor",
      ru: "Декор",
      en: "Decor",
      fr: "Décor",
      tr: "Dekor",
    },
    image: workPanel,
  },
  {
    title: {
      uz: "Sovg‘abop buyumlar",
      ru: "Подарочные изделия",
      en: "Gift objects",
      fr: "Objets cadeaux",
      tr: "Hediyelik objeler",
    },
    label: {
      uz: "Sovg‘a",
      ru: "Подарок",
      en: "Souvenir",
      fr: "Souvenir",
      tr: "Hediye",
    },
    image: workGift,
  },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "uz";

  const statsRaw = t("home.stats", { returnObjects: true });
  const signaturesRaw = t("home.signatures", { returnObjects: true });
  const stepsRaw = t("home.steps", { returnObjects: true });

  const stats = Array.isArray(statsRaw) ? statsRaw : [];
  const signatures = Array.isArray(signaturesRaw) ? signaturesRaw : [];
  const steps = Array.isArray(stepsRaw) ? stepsRaw : [];

  const getText = (value) => value?.[lang] || value?.uz || "";

  return (
    <section className="home">
      <div className="home__grain" />

      <motion.div
        className="home__orb home__orb--one"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="home__orb home__orb--two"
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <div className="home__hero">
          <Reveal className="home__copy">
            <span className="home__kicker">{t("home.kicker")}</span>

            <h1>
              {t("home.titleOne")}
              <br />
              {t("home.titleTwo")}
            </h1>

            <p>{t("home.text")}</p>

            <div className="home__actions">
              <Link to="/products">{t("common.explore")}</Link>
              <Link to="/about">{t("common.story")}</Link>
            </div>
          </Reveal>

          <Reveal className="home__hero-products" delay={0.08}>
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                className="home__hero-product"
                key={product.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link to="/products">
                  <div className="home__hero-product-media">
                    <img
                      src={product.image}
                      alt={getText(product.title)}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="home__hero-product-info">
                    <small>{getText(product.title)}</small>
                    <strong>{product.price}</strong>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Reveal>
        </div>

        <Reveal className="home__stats" delay={0.12}>
          {stats.map((item) => (
            <div className="home__stat" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="home__signature">
          {signatures.map((item, index) => (
            <Reveal
              className="home__signature-card"
              key={item.number}
              delay={index * 0.05}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </Reveal>
          ))}
        </div>

        <Reveal className="home__statement">
          <span>{t("home.statementSmall")}</span>
          <strong>{t("home.statement")}</strong>
        </Reveal>

        <div className="home__showcase">
          <Reveal className="home__showcase-head">
            <span className="home__section-label">{t("home.selectedWorks")}</span>
            <h2>{t("home.selectedTitle")}</h2>
          </Reveal>

          <div className="home__showcase-grid">
            {showcases.map((item, index) => (
              <Reveal
                className="home__work"
                key={getText(item.title)}
                delay={index * 0.08}
              >
                <Link to="/products">
                  <div className="home__work-image">
                    <img
                      src={item.image}
                      alt={getText(item.title)}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <img className="home__work-watermark" src="/logo.png" alt="" />
                  </div>

                  <div className="home__work-info">
                    <small>{getText(item.label)}</small>
                    <strong>{getText(item.title)}</strong>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="home__process">
          <div className="home__process-title">
            <span className="home__section-label">{t("home.process")}</span>
            <h2>{t("home.processTitle")}</h2>
          </div>

          <div className="home__process-line">
            {steps.map((step, index) => (
              <div className="home__process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="home__market">
          <div>
            <span className="home__section-label">
              {t("home.marketplaceSmall")}
            </span>
            <h2>{t("home.marketplaceTitle")}</h2>
          </div>

          <Link to="/marketplace">{t("common.platforms")}</Link>
        </Reveal>
      </div>
    </section>
  );
}