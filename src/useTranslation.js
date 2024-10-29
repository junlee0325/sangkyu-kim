import { useLanguage } from './LanguageContext';

const useTranslation = () => {
  const { language, translations } = useLanguage();

  const t = (key) => translations[language][key] || key; // fallback to key if translation is missing

  return { t };
};

export default useTranslation;