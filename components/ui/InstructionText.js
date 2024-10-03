import { Text, StyleSheet } from "react-native";
import Colors from "../../costants/colors";

export default function InstructionText({ text }) {
  return <Text style={styles.instructionText}>{text}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary500,
    fontSize: 24,
  },
});
