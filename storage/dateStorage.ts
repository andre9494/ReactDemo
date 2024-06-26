import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveDate = async (value: string) => {
  try {
    await AsyncStorage.setItem("targetDate", value);
  } catch (e) {
    // saving error
  }
};

export const getDate = async () => {
  try {
    const value = await AsyncStorage.getItem("targetDate");
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
