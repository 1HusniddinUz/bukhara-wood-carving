import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal/Reveal";
import { company } from "../../data/company";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    [t("contact.info.location"), company.address],
    [t("contact.info.phone"), `+${company.phones[0]}`],
    [t("contact.info.email"), company.email],
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        company.email
      )}` +
      `&su=${encodeURIComponent(formData.subject || "New inquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact">
      <div className="contact__grain" />

      <motion.div
        className="contact__orb contact__orb--one"
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="contact__orb contact__orb--two"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <Reveal className="contact__hero">
          <span className="contact__kicker">{t("contact.kicker")}</span>

          <div className="contact__hero-row">
            <h1>
              {t("contact.titleOne")}
              <br />
              {t("contact.titleTwo")}
            </h1>

            <div className="contact__stamp">
              <span>88</span>
              <small>{t("contact.locationLabel")}</small>
            </div>
          </div>
        </Reveal>

        <div className="contact__layout">
          <Reveal className="contact__desk" delay={0.08}>
            <motion.div
              className="contact__object"
              animate={{ rotateZ: [-1.2, 1.2, -1.2], y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="contact__ring contact__ring--one" />
              <div className="contact__ring contact__ring--two" />

              <div className="contact__plate">
                <span>BWC</span>
              </div>

              <div className="contact__mini">
                <small>{t("contact.open")}</small>
                <strong>{t("contact.forOrders")}</strong>
              </div>
            </motion.div>
          </Reveal>

          <Reveal className="contact__form-panel" delay={0.12}>
            <form onSubmit={handleSubmit} className="contact__form">
              <label>
                <span>{t("contact.form.name")}</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                />
              </label>

              <label>
                <span>{t("contact.form.phone")}</span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.form.phonePlaceholder")}
                  required
                />
              </label>

              <label>
                <span>{t("contact.form.subject")}</span>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact.form.subjectPlaceholder")}
                  required
                />
              </label>

              <label>
                <span>{t("contact.form.message")}</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows="6"
                  required
                />
              </label>

              <button type="submit">{t("common.openGmail")} ↗</button>
            </form>
          </Reveal>
        </div>

        <Reveal className="contact__info" delay={0.16}>
          {contactInfo.map(([label, value]) => (
            <div className="contact__info-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </Reveal>

        <Reveal className="contact__map-block">
          <div>
            <span className="contact__section-label">{t("contact.mapSmall")}</span>
            <h2>{t("contact.mapTitle")}</h2>
          </div>

          <div className="contact__map">
            <iframe
              title="Bukhara Wood Carving Location"
              src={`https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6133.05285420959!2d64.41966!3d39.77274!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzIxLjkiTiA2NMKwMjUnMTAuOCJF!5e0!3m2!1sru!2s!4v1777481615245!5m2!1sru!2s`}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}