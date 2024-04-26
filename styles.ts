import { StyleSheet } from 'react-native';

const container = {
  marginVertical: 50,
  marginHorizontal: 10,
};

const fontColor = "#FFF";

const styles = StyleSheet.create({
  container: container,
  appBackground: {
    height: "100%",
    width: "100%",
    backgroundColor: "#223",
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: fontColor }
});

export default styles;