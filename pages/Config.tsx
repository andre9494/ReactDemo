import TextField from "../components/TextField";
import { COLORS } from "../styles";
import CenteredContainer from "../layouts/CenteredContainer";
import DatePicker from "react-native-modern-datepicker";
import { useState } from "react";
import Button from "../components/Button";
import { Moment } from "moment";
import moment from "moment";

const Config = (props: { setTargetDate: React.Dispatch<React.SetStateAction<Moment | undefined>> }) => {
  const { setTargetDate } = props;
  const [selectedDate, setSelectedDate] = useState<string>("");

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
        
        }} />
    </CenteredContainer>
  );
};

export default Config;
