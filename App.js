import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }

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
        {screen}
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

