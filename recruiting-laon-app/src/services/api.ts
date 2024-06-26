import { userStore } from "../stores/userStore";
import { AppError } from "../utils/AppError";
import axios from "axios";

const api = axios.create({
  // A baseUrl Geralmente vem de uma variável de ambiente, porem deixei fixo já q estou usando a API do TMDB
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 16000,

  timeoutErrorMessage: "Limit time for request has been reach",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "X-Time-Zone": new Date().getTimezoneOffset() / 60,
  },
});

api.interceptors.request.use(
  (config) => {
    const access_token = userStore.getState().userAccessToken;
    const userPreferedLanguage = userStore.getState().userPreferedLanguage;
    
    if (config.headers && access_token) {
      // Aq iria o acessToken de cada user, como estou usando API do TMDB gerei um token pro meu usuário, e deixei fixo para facilitar.
      config.headers.Authorization = ``;
    }
        
    config.url = config?.url + `?language=${userPreferedLanguage === "pt" ? "pt-BR" : "en-US"}`;

    if (__DEV__ && config?.baseURL) {
      console.log(config?.baseURL + config?.url);

      if (config.data) {
        console.log(config.data);
      }
    }

    return config;
  },
  (requestError) => {
    return Promise.reject(requestError);
  }
);

api.interceptors.response.use(
  (requestResponse) => {
    return requestResponse.data;
  },
  async (requestError) => {
    if (
      requestError.response?.data &&
      requestError.response?.data?.message
    ) {
      if (__DEV__) {
        console.log(
          "requestError.response?.data?.message",
          requestError.response?.data?.message
        );
      }
      return Promise.reject(
        new AppError(requestError.response?.data?.error?.message)
      );
    } else {
      if (__DEV__) {
        console.log("requestError.response", requestError.response);
      }
      return Promise.reject(requestError);
    }
  }
);

export { api };
