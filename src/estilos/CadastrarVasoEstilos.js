import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CadastrarStyle = StyleSheet.create({
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
    fontSize: width * 0.10,
    fontWeight: 'bold',
    color: '#195c30',
    textAlign: 'center',
    marginTop: height * 0.05,
  },
  config: {
    width: width * 0.6,
    height: width * 0.6,
    alignSelf: 'center',
    marginTop: height * 0.05,
    marginStart: height * 0.05
  },
  label: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#195c30',
    textAlign: 'center',
    marginTop: height * 0.05,
  },
  picker: {
    height: height * 0.06,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: height * 0.1,
  },
  button: {
    backgroundColor: '#195c30',
    padding: height * 0.02,
    borderRadius: width * 0.03,
    alignItems: 'center',
    marginBottom: height * 0.15,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default CadastrarStyle;
