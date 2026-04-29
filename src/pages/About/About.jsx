import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal/Reveal";
import { company } from "../../data/company";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  const archiveRaw = t("about.archive", { returnObjects: true });
  const timelineRaw = t("about.timeline", { returnObjects: true });

  const archive = Array.isArray(archiveRaw) ? archiveRaw : [];
  const timeline = Array.isArray(timelineRaw) ? timelineRaw : [];

  return (
    <section className="about">
      <div className="about__grain" />

      <motion.div
        className="about__orb about__orb--one"
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="about__orb about__orb--two"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <Reveal className="about__hero">
          <span className="about__kicker">{t("about.kicker")}</span>

          <div className="about__hero-row">
            <h1>
              {t("about.titleOne")}
              <br />
              {t("about.titleTwo")}
            </h1>

            <div className="about__mark">
              <span>BWC</span>
            </div>
          </div>
        </Reveal>

        <div className="about__layout">
          <Reveal className="about__sculpture" delay={0.08}>
            <motion.div
              className="about__object"
              animate={{ rotateZ: [-1.5, 1.5, -1.5], y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="about__ring about__ring--one" />
              <div className="about__ring about__ring--two" />

              <div className="about__plate about__plate--main">
                <span>ASH</span>
              </div>

              <div className="about__plate about__plate--side" />

              <div className="about__label">
                <small>{t("about.master")}</small>
                <strong>{company.founder}</strong>
              </div>
            </motion.div>
          </Reveal>

          <Reveal className="about__text-block" delay={0.12}>
            <span>{t("about.notFactory")}</span>
            <strong>{t("about.statement")}</strong>
            <p>{t("about.text")}</p>
          </Reveal>
        </div>

        <Reveal className="about__timeline" delay={0.16}>
          {timeline.map((item) => (
            <div className="about__time" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="about__archive">
          {archive.map((item, index) => (
            <Reveal
              className="about__archive-card"
              key={item.number}
              delay={index * 0.06}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </Reveal>
          ))}
        </div>

        <Reveal className="about__statement">
          <span>{t("about.philosophy")}</span>
          <strong>{t("about.philosophyText")}</strong>
        </Reveal>
      </div>
    </section>
  );
}