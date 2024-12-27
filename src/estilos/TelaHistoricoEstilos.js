import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    justifyContent: "space-between",
    backgroundColor: '#b4e39f',
  },
  backStyle: {
    marginTop: height * 0.03,
    width: width * 0.1,
    height: width * 0.1,
  },
  titulo: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#195c30',
    textAlign: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
  logoHistorico: {
    width: width * 0.6,
    height: width * 0.6,
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  lista: {
    marginTop: height * 0.02,
  },
  itemContainer: {
    backgroundColor: '#e6f7ff',
    padding: width * 0.04,
    marginBottom: height * 0.015,
    borderRadius: width * 0.02,
    borderColor: '#195c30',
    borderWidth: 1,
  },
  textoItem: {
    fontSize: width * 0.045,
    color: '#195c30',
  },
});

export default styles;
