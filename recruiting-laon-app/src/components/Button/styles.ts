import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: ColorTheme.white,
    borderRadius: 4,
  }
});