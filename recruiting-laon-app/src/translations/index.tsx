import { CommonsEn } from "./Commons/en";
import { CommonsPt } from "./Commons/pt";
import { RegisterScreenEn } from "./RegisterScreen/en";
import { RegisterScreenPt } from "./RegisterScreen/pt";
import { TranslationsType } from "./types/TranslationsType";

export const translations: TranslationsType = {
  en: {
    RegisterScreen: RegisterScreenEn,
    Commons: CommonsEn,
  },
  ptbr: {
    RegisterScreen: RegisterScreenPt,
    Commons: CommonsPt,
  },
};
