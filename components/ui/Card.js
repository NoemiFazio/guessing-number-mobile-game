import { View, StyleSheet } from "react-native";
import Colors from "../../costants/colors";

export default function Card({ children }) {
  return <View style={styles.rootContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
