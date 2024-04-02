import { StyleSheet, View } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";



export default function App() {
  return (
    <View style={styles.appBg}>
      <StartGameScreen />
    </View>

  );
}

const styles = StyleSheet.create({
  appBg:{
    backgroundColor: '#ffd036',
    flex: 1,
  }
});

