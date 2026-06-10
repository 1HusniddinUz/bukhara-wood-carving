import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";
import "./LanguageSwitcher.css";

const LANGUAGES = [
  { code: "uz", short: "UZ", name: "O‘zbekcha" },
  { code: "ru", short: "RU", name: "Русский" },
  { code: "en", short: "EN", name: "English" },
  { code: "fr", short: "FR", name: "Français" },
  { code: "tr", short: "TR", name: "Türkçe" },
];

export default function LanguageSwitcher({ variant = "desktop", onSelect }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current =
    LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
    onSelect?.();
  };

  useEffect(() => {
    if (!open) return undefined;

    const handlePointer = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className={`lang lang--${variant} ${open ? "lang--open" : ""}`}
    >
      <button
        type="button"
        className="lang__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span className="lang__current">{current.short}</span>
        <FiChevronDown className="lang__chevron" aria-hidden="true" />
      </button>

      <ul className="lang__menu" role="listbox">
        {LANGUAGES.map((lang) => (
          <li key={lang.code} role="option" aria-selected={lang.code === current.code}>
            <button
              type="button"
              className={`lang__option ${
                lang.code === current.code ? "lang__option--active" : ""
              }`}
              onClick={() => handleSelect(lang.code)}
            >
              <span className="lang__option-code">{lang.short}</span>
              <span className="lang__option-name">{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
