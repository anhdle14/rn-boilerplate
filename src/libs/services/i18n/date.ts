import * as config from "./config";
import moment from "moment";

const Date = {
  init(locale: keyof config.ISupportedLocale) {
    return new Promise((resolve, reject) => {
      config.SupportedLocale[locale]
        .momentLocaleLoader()
        .then(() => {
          moment.locale(locale);

          return resolve();
        })
        .catch((err: Error) => reject(err));
    });
  },

  format(date: Date, format: string) {
    return moment(date).format(format);
  }
};

export default Date;
