import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const LogarStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    justifyContent: 'space-between',
    backgroundColor: '#195c30',
  },
  logo: {
    width: width * 0.9,
    height: height * 0.15,
    alignSelf: 'center',
    marginTop: height * 0.2,
    marginBottom: height * 0.05,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: height * 0.02,
    fontSize: width * 0.045,
    marginBottom: height * 0.02,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#b4e39f',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.35,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: height * 0.1,
  },
  buttonText: {
    color: '#195c30',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default LogarStyle;
