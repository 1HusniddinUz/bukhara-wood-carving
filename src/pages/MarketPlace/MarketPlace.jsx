import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal/Reveal";
import { marketplaces } from "../../data/marketplaces";
import "./MarketPlace.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MarketPlace() {
  const { t } = useTranslation();

  return (
    <section className="market">
      <div className="market__grain" />

      <motion.div
        className="market__orb market__orb--one"
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="market__orb market__orb--two"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <Reveal className="market__hero">
          <span className="market__kicker">{t("marketplacePage.kicker")}</span>

          <div className="market__hero-row">
            <h1>
              {t("marketplacePage.titleOne")}
              <br />
              {t("marketplacePage.titleTwo")}
            </h1>

            <div className="market__meta">
              <strong>{String(marketplaces.length).padStart(2, "0")}</strong>
              <span>{t("marketplacePage.platforms")}</span>
            </div>
          </div>
        </Reveal>

        <div className="market__wall">
          <div className="market__axis">
            <span>BWC</span>
          </div>

          {marketplaces.map((market, index) => (
            <motion.article
              key={market.slug}
              className={`market__card market__card--${index + 1}`}
              style={{ "--market-accent": market.accent }}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.012,
                transition: { duration: 0.24 },
              }}
            >
              <Link to={`/marketplace/${market.slug}`}>
                <div className="market__logo">
                  <img
                    src={market.logo}
                    alt={market.name}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <b>{market.name.slice(0, 2).toUpperCase()}</b>
                </div>

                <div className="market__card-body">
                  <small>{t("marketplacePage.label")}</small>
                  <h2>{market.name}</h2>
                </div>

                <div className="market__preview">
                  {market.products.slice(0, 3).map((product) => (
                    <span key={product.id}>
                      <img
                        src={product.image}
                        alt={product.title}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    </span>
                  ))}
                </div>

                <div className="market__arrow">↗</div>
              </Link>
            </motion.article>
          ))}
        </div>

        <Reveal className="market__statement">
          <span>{t("marketplacePage.statementSmall")}</span>
          <strong>{t("marketplacePage.statement")}</strong>
        </Reveal>
      </div>
    </section>
  );
}