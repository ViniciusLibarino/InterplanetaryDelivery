import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginBottom: 16,
  },
  label: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
    marginTop: -12,
    marginLeft: 8,
  },
});
