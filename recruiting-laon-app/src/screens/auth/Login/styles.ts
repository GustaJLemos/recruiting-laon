import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTheme.gray.gray_200,
    paddingVertical: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form: { 
    gap: 12, 
    marginTop: 32, 
    marginBottom: 12 
  }
});