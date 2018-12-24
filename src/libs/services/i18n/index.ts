import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import RNLanguages from "react-native-languages";
import en from "./lang/en.json";


const STORAGE_KEY = "@APP:languageCode";

// creating a language detection plugin using expo
// http://i18n.com/docs/ownplugin/#languagedetector

i18n
  .createInstance()
  .use(reactI18nextModule)
  .init({
    lng: RNLanguages.language,
    fallbackLng: "en",
    react: { wait: true },
    resources: { en },
    keySeparator: false,
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it does escape per default to prevent xss!
    }
  });

export default i18n;
