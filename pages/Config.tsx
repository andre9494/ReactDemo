import { View } from "react-native";
import TextField from "../components/TextField";
import styles, { COLORS } from "../styles";
import CenteredContainer from "../layouts/CenteredContainer";
import DatePicker from 'react-native-modern-datepicker';
import { useState } from "react";

const Config = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <CenteredContainer>
      <TextField>asdsa</TextField>
      <TextField>{selectedDate}</TextField>
      <DatePicker
      onSelectedChange={(date:any) => setSelectedDate(date)}
      options={{
        backgroundColor: '#0000',
        textHeaderColor: '#FFF',
        textDefaultColor: '#FFF',
        selectedTextColor: '#FFF',
        mainColor: COLORS.squareGreen,
        textSecondaryColor: COLORS.squareGreen,
      }}
    />
    </CenteredContainer>
  );
};

export default Config;
