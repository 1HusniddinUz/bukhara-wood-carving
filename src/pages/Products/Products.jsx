import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal/Reveal";
import { products, productCategories } from "../../data/products";
import "./Products.css";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
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

export default function Products() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "uz";

  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const getText = (value) => value?.[lang] || value?.uz || "";

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return products.filter((product) => {
      const title = getText(product.title).toLowerCase();
      const description = getText(product.description).toLowerCase();

      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;

      const searchMatch =
        !keyword || title.includes(keyword) || description.includes(keyword);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search, lang]);

  const featuredProduct = filteredProducts[0];
  const otherProducts = filteredProducts.slice(1);

  const getCategoryLabel = (categoryValue) => {
    const category = productCategories.find((item) => item.value === categoryValue);
    return getText(category?.label);
  };

  return (
    <section className="products">
      <div className="products__grain" />

      <motion.div
        className="products__orb products__orb--one"
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="products__orb products__orb--two"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <Reveal className="products__hero">
          <div>
            <span className="products__kicker">
              {t("productsPage.kicker")}
            </span>

            <h1>
              {t("productsPage.titleOne")}
              <br />
              {t("productsPage.titleTwo")}
            </h1>
          </div>

          <div className="products__counter">
            <strong>{filteredProducts.length}</strong>
            <span>{t("productsPage.counter")}</span>
          </div>
        </Reveal>

        <Reveal className="products__toolbar" delay={0.08}>
          <label className="products__search">
            <span>{t("common.search")}</span>
            <input
              type="search"
              placeholder={t("common.searchPlaceholder")}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <ul className="products__filters">
            {productCategories.map((category) => (
              <li key={category.value}>
                <button
                  type="button"
                  className={
                    activeCategory === category.value
                      ? "products__filter products__filter--active"
                      : "products__filter"
                  }
                  onClick={() => setActiveCategory(category.value)}
                >
                  {getText(category.label)}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        {featuredProduct ? (
          <>
            <Reveal className="products__featured" delay={0.1}>
              <div className="products__featured-media">
                <img
                  src={featuredProduct.image}
                  alt={getText(featuredProduct.title)}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span>BWC</span>
              </div>

              <div className="products__featured-content">
                <small>{getCategoryLabel(featuredProduct.category)}</small>

                <h2>{getText(featuredProduct.title)}</h2>

                <p>{getText(featuredProduct.description)}</p>

                <div className="products__featured-bottom">
                  <strong>{featuredProduct.price}</strong>
                  <button type="button">{t("productsPage.featuredButton")}</button>
                </div>
              </div>
            </Reveal>

            <motion.div
              className="products__gallery"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              key={`${activeCategory}-${search}-${lang}`}
            >
              {otherProducts.map((product, index) => (
                <motion.article
                  className="products__card"
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.24 },
                  }}
                >
                  <div className="products__card-index">
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  <div className="products__card-media">
                    <img
                      src={product.image}
                      alt={getText(product.title)}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span>BWC</span>
                  </div>

                  <div className="products__card-info">
                    <small>{getCategoryLabel(product.category)}</small>
                    <h3>{getText(product.title)}</h3>
                    <p>{product.price}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </>
        ) : (
          <Reveal className="products__empty">
            <span>{t("productsPage.emptySmall")}</span>
            <strong>{t("productsPage.emptyTitle")}</strong>
          </Reveal>
        )}
      </div>
    </section>
  );
}