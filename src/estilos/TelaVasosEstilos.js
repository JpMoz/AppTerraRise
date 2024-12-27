import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const VasosStyles = StyleSheet.create({
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
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#195c30',
    textAlign: 'center',
    marginTop: height * 0.02,
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
  vasoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  vasoItem1: {
    marginStart: width * 0.05,
    alignItems: 'center',
  },
  vasoItem2: {
    marginStart: width * 0.25,
    alignItems: 'center',
  },
  vaso: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: 'center',
    marginBottom: height * 0.02,
    marginStart: width * 0.20,
  },
  buttonText: {
    marginStart: width * 0.10,
    color: '#0d4159',
    fontSize: width * 0.075,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vasoButton1: {
    backgroundColor: '#4CAF50',
    padding: height * 0.025,
    borderRadius: width * 0.03,
    alignItems: 'center',
    width: width * 0.6,
    marginStart: width * 0.15,
    marginBottom: width * 0.05,
  },
  vasoButton2: {
    backgroundColor: '#F44336',
    padding: height * 0.025,
    borderRadius: width * 0.03,
    alignItems: 'center',
    width: width * 0.6,
    marginStart: width * 0.15,
    marginBottom: width * 0.30,
  },
  vasoText: {
    fontSize: width * 0.045,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default VasosStyles;