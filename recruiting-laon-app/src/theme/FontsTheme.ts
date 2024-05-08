type fontStylesTheme = {
  fontWeight:
    | '600'
    | '500'
    | '400'
    | '300'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '700'
    | '800'
    | '900'
    | undefined; 
  fontFamily: string, 
  fontSize: number,
  lineHeight: number,
}

export type FontsThemeType = {
  semibold_40: fontStylesTheme,
  semibold_24: fontStylesTheme,
  semibold_16: fontStylesTheme,
  regular_16: fontStylesTheme,
  regular_12: fontStylesTheme,
  semibold_12: fontStylesTheme,
}

export const FontsTheme: FontsThemeType = {
  semibold_40: { 
    fontWeight: '600', 
    fontFamily: 'Inter_600SemiBold', 
    fontSize: 40,
    lineHeight: 24
  },
  semibold_24: { 
    fontWeight: '600', 
    fontFamily: 'Inter_600SemiBold', 
    fontSize: 24,
    lineHeight: 30
  },
  semibold_16: { 
    fontWeight: '600', 
    fontFamily: 'Inter_600SemiBold', 
    fontSize: 16,
    lineHeight: 24
  },
  regular_16: { 
    fontWeight: '400', 
    fontFamily: 'Inter_400Regular', 
    fontSize: 16,
    lineHeight: 24
  },
  regular_12: { 
    fontWeight: '400', 
    fontFamily: 'Inter_400Regular', 
    fontSize: 12,
    lineHeight: 18

  },
  semibold_12: { 
    fontWeight: '600', 
    fontFamily: 'Inter_600SemiBold', 
    fontSize: 12,
    lineHeight: 18
  },
}