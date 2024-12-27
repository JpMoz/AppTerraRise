import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4e39f',
    padding: width * 0.05,
    justifyContent: 'space-around',
  },
  backStyle: {
    marginTop: height * 0.03,
    width: width * 0.1,
    height: width * 0.1,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#195c30',
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  section: {
    backgroundColor: '#fff',
    padding: width * 0.04,
    borderRadius: width * 0.03,
    borderColor: '#0C8032',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: height * 0.03,
  },
  subtitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#195c30',
    marginBottom: height * 0.02,
  },
  imageChecar: {
    width: width * 0.3,
    height: width * 0.3,
    alignSelf: 'center',
  },
  reservoirStatus: {
    marginBottom: height * 0.02,
  },
  statusText: {
    fontSize: width * 0.045,
    color: '#195c30',
    marginBottom: height * 0.01,
  },
  button: {
    backgroundColor: '#0C8032',
    padding: height * 0.02,
    borderRadius: width * 0.03,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  vasosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
  },
  vasoButton: {
    backgroundColor: '#0C8032',
    padding: height * 0.015,
    borderRadius: width * 0.03,
    alignItems: 'center',
    width: width * 0.4,
  },
  vasoText: {
    fontSize: width * 0.045,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
