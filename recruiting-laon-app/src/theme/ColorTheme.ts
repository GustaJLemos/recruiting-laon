export type ColorThemeType = {
  primary: {
    dark: string,
    default: string,
    light: string,
  },
  feedback: {
    negative: string,
    warning: string,
    successful: string,
    informational: string,
  },
  gray: {
    gray_100: string,
    gray_200: string,
    gray_300: string,
    gray_400: string,
    gray_500: string,
  },
  black: string,
  white: string,
}

export const ColorTheme: ColorThemeType = {
  primary: {
    dark: '#186A83',
    default: '#3EBDE4',
    light: '#A1E6FC',
  },
  feedback: {
    negative: '#E43E3E',
    warning: '#E4B63E',
    successful: '#3EE48A',
    informational: '#5F3EE4'
  },
  gray: {
    gray_100: '#1F1D2F',
    gray_200: '#282639',
    gray_300: '#48465B',
    gray_400: '#636177',
    gray_500: '#9895B4',
  },  
  black: '#000000',
  white: '#ffffff',
}