import { LocaleResource } from "./locales.d";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: LocaleResource;
    resources: {
      en: LocaleResource;
      fr: LocaleResource;
    };
  }
}
