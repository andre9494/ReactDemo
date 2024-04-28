import { View } from "react-native";
import Square from "../components/Square";
import TextField from "../components/TextField";
import styles from "../styles";
import moment, { Duration, Moment } from "moment";
import { useEffect, useState } from "react";
import IAttribute from "../interfaces/IAttribute";
import CenteredContainer from "../layouts/CenteredContainer";

const Timer = (props: { targetDate: Moment }) => {
  const { targetDate } = props;
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  }, [count]);
  const currentDate: Moment = moment();
  const duration: Duration = moment.duration(targetDate.diff(currentDate));

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
    <CenteredContainer>
      <TextField>{targetDate.format("DD/MM/yyyy-hh:mm:ss")}</TextField>
      {squares.map((line: Array<IAttribute>, index: number) => (
        <View
          key={index}
          style={{ ...styles.container, display: "flex", flexDirection: "row" }}
        >
          {line.map((time: IAttribute) => (
            <View key={index + time.label} style={styles.container}>
              <TextField>{time.label}</TextField>
              <Square>{time.value}</Square>
            </View>
          ))}
        </View>
      ))}
    </CenteredContainer>
  );
};

export default Timer;
