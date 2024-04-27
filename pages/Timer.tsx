import { View } from "react-native";
import Square from "../components/Square";
import TextField from "../components/TextField";
import styles from "../styles";
import moment from "moment";
import { useEffect, useState } from "react";
import IAttribute from "../interfaces/IAttribute";

const Timer = () => {
  //   const currentDate = moment();
  const currentDate = moment();
  const targetDate = moment("2024-05-31 12:00:00");
  const duration = moment.duration(targetDate.diff(currentDate));
  //   const years = duration.years();
  //   const months = duration.months();
  //   const days = duration.days();
  //   const hours = duration.hours();
  //   const minutes = duration.minutes();
  //   const seconds = duration.seconds();
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  }, [count]);

  const squares: Array<Array<IAttribute>> = [
    [
      { label: "Year", value: duration.years() },
      { label: "Months", value: duration.months() },
      { label: "Days", value: duration.days() },
    ],
    [
      { label: "Hours", value: duration.hours() },
      { label: "Minutes", value: duration.minutes() },
      { label: "Seconds", value: duration.seconds() },
    ],
  ];

  return (
    <View style={{ ...styles.pageContainer, ...styles.centeredContainer }}>
      <TextField>{targetDate.format("DD/MM/yyyy-hh:mm:ss")}</TextField>
      {squares.map((line: any) => (
        <View
          style={{ ...styles.container, display: "flex", flexDirection: "row" }}
        >
          {line.map((time:any) => (
            <View style={styles.container}>
              <TextField>{time.label}</TextField>
              <Square>{time.value}</Square>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Timer;
