import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";

// importing all languages
import translationEN from "./i18n/en.json";
import translationHI from "./i18n/hi.json";
import translationES from "./i18n/es.json";
import translationFR from "./i18n/fr.json";


i18n
    // .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        resources: {
            en: {
                translation: translationEN
            },
            hi: {
                translation: translationHI
			},
			es: {
                translation: translationES
            },
            fr: {
                translation: translationFR
            }
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;