import { Text, StyleSheet } from "react-native";
import Colors from "../costants/colors";

export default function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: 12,
  },
});
