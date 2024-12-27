import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const InicialStyle = StyleSheet.create({
  telaInicial: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#0C8032',
  },
  logo: {
    flex: 1,
    width: width * 0.7,
    height: height * 0.35,
    alignSelf: 'center',
  },
  text: {
    marginTop: height * 0.08,
    color: '#fff',
    fontSize: width * 0.075,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inicialButton: {
    marginTop: height * 0,
    backgroundColor: '#b4e39f',
    paddingVertical: height * 0.016,
    paddingHorizontal: width * 0.20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  buttonText: {
    color: '#0C8032',
    fontSize: width * 0.040,
    fontWeight: 'bold',
  },
});

export default InicialStyle;
