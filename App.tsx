// import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styles";
import Timer from "./pages/Timer";
import { StatusBar } from "expo-status-bar";
import Config from "./pages/Config";
import { Moment } from "moment";
import { useState } from "react";

export default function App() {

  const [targetDate, setTargetDate] = useState<Moment>();
  // moment("2024-05-31 12:00:00")
  return (
    <View style={styles.appBackground}>
      <StatusBar style="light" />
      <Config setTargetDate={setTargetDate} />
      {targetDate && <Timer targetDate={targetDate} />}
    </View>
  );
}
