import { StyleSheet } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  return (
    <LinearGradient
      colors={['#223791', '#ffd036',]}
      style={styles.appBg}>
      <StartGameScreen />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  appBg: {

    flex: 1,
  }
});

