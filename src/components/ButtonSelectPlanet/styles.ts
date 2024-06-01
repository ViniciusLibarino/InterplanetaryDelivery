import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapperButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(103,78,167, 0.4)',
    borderRadius: 12,
    padding: 4,
    flex: 1,
  },
  buttonActive: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#674ea7',
    borderRadius: 12,
    padding: 4,
    flex: 1,
  },
  title: {
    color: '#674ea7',
  },
  titleActive: {
    color: '#ffffff',
  },
});
