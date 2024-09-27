import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title text="Game Screen!" />
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
