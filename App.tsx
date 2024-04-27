// import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styles";
import Timer from "./pages/Timer";
import { StatusBar } from "expo-status-bar";
import Config from "./pages/Config";
import moment from "moment";

export default function App() {
  return (
    <View style={styles.appBackground}>
      <StatusBar style="light" />
      <Config/>
      {/* <Timer targetDate={moment("2024-05-31 12:00:00")} /> */}
    </View>
  );
}
