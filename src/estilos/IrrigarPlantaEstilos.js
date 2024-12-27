import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const IrrigarPlantaStyle = StyleSheet.create({
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
    alignSelf: 'flex-start',
  },
  logoPlanta: {
    width: width * 0.6,
    height: width * 0.6,
    alignSelf: 'center',
  },
  titulo: {
    marginTop: height * 0.02,
    fontSize: width * 0.075,
    fontWeight: 'bold',
    color: '#2e8b57',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  nomePlanta: {
    marginTop: height * 0.03,
    fontSize: width * 0.08,
    color: '#fff',
    marginBottom: height * 0.01,
    textAlign: 'center',
  },
  quantidadeRecomendada: {
    marginTop: height * 0.02,
    fontSize: width * 0.05,
    color: '#fff',
    marginBottom: height * 0.02,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.02,
    padding: width * 0.03,
    fontSize: width * 0.045,
    marginBottom: height * 0.02,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#195c30',
    padding: height * 0.02,
    borderRadius: width * 0.03,
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});
export default IrrigarPlantaStyle;
