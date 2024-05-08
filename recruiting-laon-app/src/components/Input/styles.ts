import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 6,
  },
  content: {
    width: '100%',
    height: 72,
    
    paddingLeft: 24,
    
    borderRadius: 4,
    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: '100%',
  },
  eyeIcon: {
    height: 56,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
});