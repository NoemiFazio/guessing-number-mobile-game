import { Text, StyleSheet } from "react-native";
import Colors from "../../costants/colors";

export default function InstructionText({ text, style }) {
  return <Text style={[styles.instructionText, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.secondary500,
    fontSize: 24,
  },
});
