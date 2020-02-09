import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./en";
import de from "./de";

export default () => i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    },
    lng: "de",
    fallbackLng: "de",
    keySeparator: false,
    nsSeparator: false,

    interpolation: {
      escapeValue: false
    }
  });