export const Fallback = "en-us";

export interface ISupportedLocaleObject {
  name: string;
  translationFileLoader: () => void;
  momentLocaleLoader: () => any;
}

export interface ISupportedLocale {
  enUS: ISupportedLocaleObject;
  vi: ISupportedLocaleObject;
}

export const SupportedLocale: ISupportedLocale = {
  enUS: {
    name: "English",
    translationFileLoader: (): void => require("../lang/en.json"),
    // en is default locale in Moment
    momentLocaleLoader: (): void => require("moment/locale/es-us")
  },
  vi: {
    name: "Vietnamese",
    translationFileLoader: (): void => require("../lang/vi.json"),
    momentLocaleLoader: (): void => require("moment/locale/vi")
  }
};

export const DefaultNamespace: string = "common";

export const NameSpaces: string[] = ["common"];
