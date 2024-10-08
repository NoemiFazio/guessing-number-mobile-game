import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../costants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 400) {
    imageSize = 150;
  }

  if (height < 420) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.rootContainer}>
        <Title text="GAME OVER" />
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your number <Text style={styles.highlight}>{userNumber}</Text> was
            guessed right after{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds.
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
