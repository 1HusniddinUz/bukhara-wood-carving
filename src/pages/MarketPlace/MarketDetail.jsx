import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal/Reveal";
import { marketplaces } from "../../data/marketplaces";
import "./MarketDetail.css";

const productVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MarketDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const market = marketplaces.find((item) => item.slug === slug);

  if (!market) {
    return (
      <section className="market-detail">
        <div className="container">
          <div className="market-detail__empty">
            <span>404</span>
            <strong>{t("common.noResult")}</strong>
            <Link to="/marketplace">{t("common.back")}</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="market-detail"
      style={{ "--market-accent": market.accent }}
    >
      <div className="market-detail__grain" />

      <motion.div
        className="market-detail__orb"
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <Reveal className="market-detail__hero">
          <Link to="/marketplace" className="market-detail__back">
            ← {t("marketplacePage.back")}
          </Link>

          <div className="market-detail__head">
            <div>
              <span className="market-detail__kicker">
                {t("marketplacePage.detailKicker")}
              </span>
              <h1>{market.name}</h1>
            </div>

            <div className="market-detail__logo">
              <img
                src={market.logo}
                alt={market.name}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <b>{market.name.slice(0, 2).toUpperCase()}</b>
            </div>
          </div>
        </Reveal>

        <div className="market-detail__layout">
          <Reveal className="market-detail__panel" delay={0.08}>
            <div className="market-detail__sculpture">
              <div className="market-detail__ring market-detail__ring--one" />
              <div className="market-detail__ring market-detail__ring--two" />

              <div className="market-detail__plate">
                <span>{market.name.slice(0, 2).toUpperCase()}</span>
              </div>
            </div>
          </Reveal>

          <div className="market-detail__products">
            {market.products.map((product, index) => (
              <motion.article
                className="market-detail__product"
                key={product.id}
                variants={productVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.24 },
                }}
              >
                <a href={product.url} target="_blank" rel="noreferrer">
                  <div className="market-detail__product-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="market-detail__image">
                    <img
                      src={product.image}
                      alt={product.title}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span>BWC</span>
                  </div>

                  <div className="market-detail__info">
                    <small>{market.name}</small>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                  </div>

                  <div className="market-detail__go">↗</div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}