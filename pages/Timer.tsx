import { View } from "react-native";
import Square from "../components/Square";
import TextField from "../components/TextField";
import styles from "../styles";
import moment from "moment";
import { useEffect, useState } from "react";

const Timer = () => {
//   const currentDate = moment();
  const currentDate = moment();
  const targetDate = moment("2025-05-31");
  const duration = moment.duration(targetDate.diff(currentDate));
  //   const years = duration.years();
  //   const months = duration.months();
  //   const days = duration.days();
  //   const hours = duration.hours();
  //   const minutes = duration.minutes();
  //   const seconds = duration.seconds();
  const [count, setCount] = useState(0);
  useEffect(() => {
    
    setTimeout(()=>{setCount(count+1)}, 100);
  }, [count]);
  
  return (
	<View style={{ ...styles.pageContainer }}>
	  <TextField>{`count: ${count}`}</TextField>
	  <TextField>Je suis tres content!!</TextField>
	  <TextField>{currentDate.format("yyyy/MM/DD-hh:mm:ss")}</TextField>
	  <TextField>{targetDate.format("yyyy/MM/DD-hh:mm:ss")}</TextField>
	  <TextField>{`years: ${duration.years()}, months: ${duration.months()}, days: ${duration.days()}`}</TextField>
	  <TextField>{`hours: ${duration.hours()}, minutes: ${duration.minutes()}, seconds: ${duration.seconds()}`}</TextField>

	  <View
		style={{ ...styles.container, display: "flex", flexDirection: "row" }}
	  >
		<View style={styles.container}>
		  <Square>{duration.years()}</Square>
		</View>
		<View style={styles.container}>
		  <Square>{duration.months()}</Square>
		</View>
		<View style={styles.container}>
		  <Square>{duration.days()}</Square>
		</View>
	  </View>
	  <View
		style={{ ...styles.container, display: "flex", flexDirection: "row" }}
	  >
		<View style={styles.container}>
		  <Square>{duration.hours()}</Square>
		</View>
		<View style={styles.container}>
		  <Square>{duration.minutes()}</Square>
		</View>
		<View style={styles.container}>
		  <Square>{duration.seconds()}</Square>
		</View>
	  </View>
	</View>
  );
};

export default Timer;
