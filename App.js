import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./costants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.secondary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {Platform.OS === "android" ? (
          <View style={styles.androidScreen}>{screen}</View>
        ) : (
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  androidScreen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
