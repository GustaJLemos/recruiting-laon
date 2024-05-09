import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTheme.gray.gray_200,
    paddingVertical: 12,
  },
  horizontalScroll: {
    paddingTop: 36,
  },
  horizontalScrollTitle: { 
    marginBottom: 12, 
    marginLeft: 20 
  },
  popularContent: {
    marginTop: 40,
    gap: 24,
  },
  popularContentTexts: {
    paddingHorizontal: 20
  }
});