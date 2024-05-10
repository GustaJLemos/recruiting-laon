import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 20,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: ColorTheme.gray.gray_300
  }
});