import TextField from "../components/TextField";
import { COLORS } from "../styles";
import CenteredContainer from "../layouts/CenteredContainer";
import DatePicker from "react-native-modern-datepicker";
import { useState } from "react";
import Button from "../components/Button";
import { Moment } from "moment";
import moment from "moment";
import Toast from "react-native-toast-message";

const Config = (props: { setTargetDate: React.Dispatch<React.SetStateAction<Moment | undefined>> }) => {
  const { setTargetDate } = props;
  const [selectedDate, setSelectedDate] = useState<string>("");
  
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: "Pick you date Mate",
      text1Style:{fontSize:20},
      position:"bottom",
      swipeable: true,
      onPress: showSecondToast
    });
  }
  const showSecondToast = ()=>{
    Toast.show({
      type: "info",
      text1: "Stop bugging me and go pick your date",
      text1Style: { fontSize: 14 },
      position: "bottom",
      swipeable: true,
      onPress: () => Toast.hide(),
    });
  }
  
  return (
    <CenteredContainer>
      <DatePicker
        onSelectedChange={(date: string) => setSelectedDate(date)}
        options={{
          backgroundColor: COLORS.transparent,
          textHeaderColor: COLORS.white,
          textDefaultColor: COLORS.white,
          selectedTextColor: COLORS.white,
          mainColor: COLORS.squareGreen,
          textSecondaryColor: COLORS.squareGreen,
        }}
      />
      <TextField>{selectedDate}</TextField>
      <Button text={"That's my date Mate!"} onClick={() => {
        showToast();
        }} />
    </CenteredContainer>
  );
};

export default Config;
