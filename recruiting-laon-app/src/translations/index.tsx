import { CommonsEn } from "./Commons/en";
import { CommonsPt } from "./Commons/pt";
import { DetailsScreenEn } from "./DetailsScreen/en";
import { DetailsScreenPt } from "./DetailsScreen/pt";
import { HomeScreenEn } from "./HomeScreen/en";
import { HomeScreenPt } from "./HomeScreen/pt";
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
    HomeScreen: HomeScreenEn,
    DetailsScreen: DetailsScreenEn,
  },
  ptbr: {
    RegisterScreen: RegisterScreenPt,
    LoginScreen: LoginScreenPt,
    Commons: CommonsPt,
    HomeScreen: HomeScreenPt,
    DetailsScreen: DetailsScreenPt,
  },
};
