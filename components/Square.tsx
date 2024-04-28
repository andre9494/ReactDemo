import { View } from "react-native";
import styles, { COLORS } from "../styles";
import TextField from "./TextField";

const Square = (props: { children: string | number; visible?: boolean, color: string }) => {
  const { children, visible, color } = props;

  return (
    <>
      {(visible == undefined || visible) && (
        <View
          style={{
            ...styles.square,
            backgroundColor: color,
          }}
        >
          <View style={styles.centeredContainer}>
            <TextField>{children}</TextField>
          </View>
        </View>
      )}
    </>
  );
};

export default Square;
