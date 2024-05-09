import { CommonsEn } from "./Commons/en";
import { CommonsPt } from "./Commons/pt";
import { LoginScreenEn } from "./LoginScreen/en";
import { LoginScreenPt } from "./LoginScreen/pt";
import { RegisterScreenEn } from "./RegisterScreen/en";
import { RegisterScreenPt } from "./RegisterScreen/pt";
import { TranslationsType } from "./types/TranslationsType";

export const translations: TranslationsType = {
  en: {
    RegisterScreen: RegisterScreenEn,
    LoginScreen: LoginScreenEn,
    Commons: CommonsEn,
  },
  ptbr: {
    RegisterScreen: RegisterScreenPt,
    LoginScreen: LoginScreenPt,
    Commons: CommonsPt,
  },
};
