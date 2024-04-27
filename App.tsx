// import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styles";
import Timer from "./pages/Timer";

export default function App() {
  return (
    <View style={styles.appBackground}>
      {/* <StatusBar style="auto" /> */}
      <Timer />
    </View>
  );
}
