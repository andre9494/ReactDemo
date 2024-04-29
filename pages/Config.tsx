import TextField from "../components/TextField";
import styles, { COLORS } from "../styles";
import CenteredContainer from "../layouts/CenteredContainer";
import DatePicker from "react-native-modern-datepicker";
import { useState } from "react";
import Button from "../components/Button";
import { Moment } from "moment";
import moment from "moment";
import Toast from "react-native-toast-message";
import { date1IsMoreRecent } from "../utils/utils";
import CONSTANTS from "../constans";
import { saveDate } from "../storage/dateStorage";
import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Config = (props: {
  setTargetDate: React.Dispatch<React.SetStateAction<Moment | undefined>>;
}) => {
  const { setTargetDate } = props;
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [imageUrl, setImageURL] = useState<string>();
  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Pick you date Mate",
      text1Style: { fontSize: 20 },
      position: "bottom",
      swipeable: true,
      onPress: showSecondToast,
    });
  };

  const showSecondToast = () => {
    Toast.show({
      type: "info",
      text1: "Stop bugging me and go pick your date",
      text1Style: { fontSize: 14 },
      position: "bottom",
      swipeable: true,
      onPress: () => Toast.hide(),
    });
  };

  const onClick = () => {
    if (!selectedDate) {
      return showToast();
    }
    if (
      date1IsMoreRecent(
        moment(selectedDate, CONSTANTS.DATEPICKER_FORMAT),
        moment(),
      )
    ) {
      saveDate(selectedDate);
      setTargetDate(moment(selectedDate, CONSTANTS.DATEPICKER_FORMAT));
    }
  };

  const pickImage = async () => {
    //   // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    //   console.log(result);

    //   if (!result.canceled) {
    //     setImageURL(result.assets[0].uri);
    //   }
  };

  return (
    <CenteredContainer>
      <TextField style={{ fontSize: 20 }}>Pick a Date</TextField>
      <DatePicker
        onSelectedChange={(date: string) => setSelectedDate(date)}
        options={{
          backgroundColor: COLORS.background,
          textHeaderColor: COLORS.white,
          textDefaultColor: COLORS.white,
          selectedTextColor: COLORS.white,
          mainColor: COLORS.squareGreen,
          textSecondaryColor: COLORS.squareGreen,
        }}
        minimumDate={moment().format(CONSTANTS.DATEPICKER_FORMAT)}
      />
      <Button text={"That's my date Mate!"} onClick={onClick} />
      <View style={styles.container}>
        <Button text={"try me"} onClick={pickImage} />
      </View>
    </CenteredContainer>
  );
};

export default Config;
