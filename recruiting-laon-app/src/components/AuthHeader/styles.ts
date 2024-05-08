import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    
    paddingVertical: 20,
    paddingHorizontal: 12,
    
    borderBottomWidth: 1,
    borderBottomColor: ColorTheme.gray.gray_300,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goBackButton: {
    borderRadius: 50,
    borderWidth: 1,
    
    padding: 10,

    borderColor: ColorTheme.gray.gray_400
  }
});