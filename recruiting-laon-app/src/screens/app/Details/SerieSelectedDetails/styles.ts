import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  image: {
    height: 500,
  },
  row: { 
    flexDirection: "row",
    gap: 4,
    marginBottom: 4
  },
  content: { 
    marginTop: 32, 
  },
  lineSeparator: { 
    width: '100%', 
    height: 1, 
    backgroundColor: ColorTheme.gray.gray_300,
    marginTop: 8,
    marginBottom: 16
  }
});