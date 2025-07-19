// LanguageSync.tsx
import { useEffect } from "react";
import i18n from "./i18n";
import { useLangStore } from "./store/lang";

const LanguageSync = () => {
  // Подписываемся на изменение языка из zustand
  const lang = useLangStore((state) => state.lang);

  useEffect(() => {
    // Когда язык изменился, обновляем i18next
    i18n.changeLanguage(lang);
  }, [lang]);

  return null; // Компонент ничего не рендерит
};

export default LanguageSync;
