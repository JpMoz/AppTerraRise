import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ConfigStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    justifyContent: 'space-between',
    backgroundColor: '#a6cacf',
  },
  backStyle: {
    marginTop: height * 0.03,
    width: width * 0.1,
    height: width * 0.1,
  },
  titulo: {
    fontSize: width * 0.080,
    fontWeight: 'bold',
    color: '#007acc',
    textAlign: 'center',
  },
  config: {
    width: width * 0.6,
    height: width * 0.6,
    alignSelf: 'center',
  },
  secao: {
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.06,
    color: '#007acc',
    marginBottom: height * 0.015,
  },
  picker: {
    height: height * 0.06,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default ConfigStyles;
