import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './styles';
import Square from './components/Square';
import TextField from './components/TextField';

export default function App() {
  return (
    // <View style={styles.container}>
    <View style={styles.appBackground}>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Je suis tres content!!</Text> */}
        <TextField>Je suis tres content!!</TextField>
        <Square/>
        {/* <StatusBar style="auto" /> */}
      </View>
    </View>
  );
}
