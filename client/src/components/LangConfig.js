import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  RU:{
    translation:{
      lenta:"Lenta ru",
      comments:"Comments",
      favorites:"Favorites",
      addMarket:"Add market",
      login:"Login",
      reklams:"Reklams",
      topProducts:"Top produçts",
      top:"Tops",
    }
  },
  TM:{
    translation:{
      lenta:"Lenta",
      comments:"Teswirler",
      favorites:"Halanlarym",
      addMarket:"Dükan goşmak",
      login:"Ulgama girmek",
      reklams:"Reklamalar",
      topProducts:"Meşhur harytlar",
      top:"Meşhurlar",
    }
  }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('lang'), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;