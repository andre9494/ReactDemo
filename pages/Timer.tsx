import { View } from "react-native";
import Square from "../components/Square";
import TextField from "../components/TextField";
import styles from "../styles";
import moment from "moment";

const Timer = () => {
  const currentDate = moment("2024-04-27");
  const targetDate = moment("2025-05-31");
  const duration = moment.duration(targetDate.diff(currentDate));
//   const date = moment(dateDiffMili);
const years = duration.years();
const months = duration.months();
const days = duration.days();
const hours = duration.hours();
const minutes = duration.minutes();
const seconds = duration.seconds();
    return (
    <View style={{...styles.pageContainer}}>
      <TextField>Je suis tres content!!</TextField>
      <TextField>{currentDate.format("yyyy/MM/DD-hh:mm:ss")}</TextField>
      <TextField>{targetDate.format("yyyy/MM/DD-hh:mm:ss")}</TextField>
      <TextField>{`years: ${years}, months: ${months}, days: ${days}`}</TextField>
      <TextField>{`hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`}</TextField>

      <View style={{ ...styles.container, display: "flex", flexDirection: "row"}}>
        <View style={styles.container}>
          <Square>0</Square>
        </View>
        <View style={styles.container}>
          <Square>0</Square>
        </View>
        <View style={styles.container}>
          <Square>0</Square>
        </View>
      </View>
      <View style={{ ...styles.container, display: "flex", flexDirection: "row"}}>
        <View style={styles.container}>
          <Square>0</Square>
        </View>
        <View style={styles.container}>
          <Square>0</Square>
        </View>
        <View style={styles.container}>
          <Square>0</Square>
        </View>
      </View>
    </View>
  );
};

export default Timer;
