import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerEn from "./locales/en/header.json";
import headerRu from "./locales/ru/header.json";

import navEn from "./locales/en/nav.json";
import navRu from "./locales/ru/nav.json";

import homeEn from "./locales/en/home.json";
import homeRu from "./locales/ru/home.json";

import aboutEn from "./locales/en/about.json";
import aboutRu from "./locales/ru/about.json";

import mainEn from "./locales/en/main.json";
import mainRu from "./locales/ru/main.json";

import contactsEn from "./locales/en/contacts.json";
import contactsRu from "./locales/ru/contacts.json";

import { useLangStore } from "./store/lang";

const initialLanguage = useLangStore.getState().lang;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      nav: navEn,
      header: headerEn,
      home: homeEn,
      about: aboutEn,
      contacts: contactsEn,
      main: mainEn,
    },
    ru: {
      nav: navRu,
      header: headerRu,
      home: homeRu,
      about: aboutRu,
      contacts: contactsRu,
      main: mainRu,
    },
  },
  lng: initialLanguage, // Язык по умолчанию
  fallbackLng: "en",
  ns: ["home", "about", "header", "contacts", "nav", "main"], // список namespaces
  defaultNS: "home", // namespace по умолчанию (можно менять в компонентах)
  interpolation: {
    escapeValue: false, // React уже экранирует значения
  },
});

export default i18n;
