import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../theme/ColorTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 20,
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor: ColorTheme.gray.gray_300,
  },
  actionsButtons: {
    gap: 24,

    flexDirection: 'row',
    alignItems: 'center'
  },
  searchButton: {
    width: 32,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 50,
    borderWidth: 1,
    
    borderColor: ColorTheme.gray.gray_400
  },
  perfillButton: {
    borderRadius: 50,
    borderWidth: 1,

    width: 32,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center',
    
    borderColor: ColorTheme.gray.gray_400
  },
});