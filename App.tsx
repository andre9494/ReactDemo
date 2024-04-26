import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    // <View style={styles.container}>
    <View style={styles.appBackground}>
      <View style={styles.container}>
        <Text style={styles.text}>Je suis tres content!!</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    </View>
  );
}
