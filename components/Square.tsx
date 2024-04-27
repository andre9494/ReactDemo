import { View } from "react-native";
import styles from "../styles";
import TextField from "./TextField";

const Square = (props: { children: string | number }) => {
  const { children } = props;

  return (
    <View style={styles.square}>
      <View style={styles.centeredContainer}>
        <TextField>{children}</TextField>
      </View>
    </View>
  );
};

export default Square;
