import { CommonsEn } from "./Commons/en";
import { CommonsPt } from "./Commons/pt";
import { LoginScreenEn } from "./LoginScreen/en";
import { LoginScreenPt } from "./LoginScreen/pt";
import { TranslationsType } from "./types/TranslationsType";

export const translations: TranslationsType = {
  en: {
    LoginScreen: LoginScreenEn,
    Commons: CommonsEn,
  },
  ptbr: {
    LoginScreen: LoginScreenPt,
    Commons: CommonsPt,
  },
};
