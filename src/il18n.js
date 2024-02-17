import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Edit <l>scr/App.js</l> and save to reload.',
            part2: 'Learn React',
          },
          footer: {
            part1: 'About',
            part2: 'F.A.Q.',
            part3: 'Legal Notice',
            part4: 'Terms and conditions',
          },
          counter_one: 'Changed language just once',
          counter_other: 'Changed language already {{count}} times',
        },
      },
      fr: {
        translation: {
          description: {
            part1: 'Editer <l>scr/App.js</l> et sauvegarder pour recharger.',
            part2: 'Apprendre React',
          },
          footer: {
            part1: 'A propos',
            part2: 'F.A.Q.',
            part3: 'Mentions légales',
            part4: 'Conditions générales',
          },
          counter_one: 'Changer la langue une fois',
          counter_other: 'Langue déjà changée {{count}} fois',
        },
      },
    },
  });

export default i18n;
