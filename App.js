import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  return (

    <LinearGradient

      colors={['#223791', '#ffd036',]}
      style={styles.appBg}>

      <ImageBackground

        source={require('./assets/img/bgdice.avif')}
        resizeMode='cover'
        style={styles.appBg}
        imageStyle={styles.backgroundImage}
      >

        <StartGameScreen />

      </ImageBackground>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  appBg: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});

