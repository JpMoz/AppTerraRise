import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const IrrigarStyle = StyleSheet.create({
  telaIrrigar: {
    flex: 1,
    padding: width * 0.05,
    justifyContent: "space-between",
    backgroundColor: '#a6cacf',
  },
  backStyle: {
    marginTop: height * 0.03,
    width: width * 0.1,
    height: width * 0.1,
  },
  jardimVertical: {
    width: width * 0.70,
    height: width * 0.70,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vasosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.10,
  },
  vaso1: {
    alignItems: 'center',
  },
  vaso2: {
    alignItems: 'center',
  },
  vaso: {
    width: width * 0.35,
    height: width * 0.35,
  },
  buttonText: {
    marginEnd: width * 0.05,
    color: '#0d4159',
    fontSize: width * 0.075,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IrrigarStyle;