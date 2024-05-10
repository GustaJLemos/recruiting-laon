import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTheme.gray.gray_200,
    paddingVertical: 12,
  },
  horizontalScroll: {
    paddingLeft: 20, 
    gap: 16, 
    paddingRight: 20
  },
  horizontalScrollTitle: { 
    marginBottom: 12, 
    marginTop: 36,
    marginLeft: 20 
  },
  popularContent: {
    marginTop: 40,
    gap: 24,
    paddingHorizontal: 20
  },
  filmsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    paddingBottom: 40
  }
});