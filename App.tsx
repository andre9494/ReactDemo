import { View } from "react-native";
import styles from "./styles";
import Timer from "./pages/Timer";
import { StatusBar } from "expo-status-bar";
import Config from "./pages/Config";
import { Moment } from "moment";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { getDate } from "./storage/dateStorage";
import moment from "moment";
import CONSTANTS from "./constans";

export default function App() {
  const [targetDate, setTargetDate] = useState<Moment>();
  useEffect(() => {
    getDate().then((date: string | undefined) => {
      if (date) {
        setTargetDate(moment(date, CONSTANTS.DATEPICKER_FORMAT));
      }
    });
  }, []);
  return (
    <View style={styles.appBackground}>
      <StatusBar style="light" />
      {targetDate ? (
        <Timer targetDate={targetDate} setTargetDate={setTargetDate} />
      ) : (
        <Config setTargetDate={setTargetDate} />
      )}
      <Toast />
    </View>
  );
}
