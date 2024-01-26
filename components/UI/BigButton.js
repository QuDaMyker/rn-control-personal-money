import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function BigButton({ image, title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple="#ccc"
      style={[({ pressed }) => pressed && styles.pressed, styles.rootContainer]}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <Image style={styles.image} width={50} height={50} source={image} />
      </View>
    </Pressable>
  );
}

export default BigButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  rootContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 20,
    padding: 20,
    width: 160,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    maxHeight: 160,
    borderColor: GlobalStyles.colors.secondary60,
  },
  textContainer: {
    marginBottom: 10,
    backgroundColor: GlobalStyles.colors.primary40,
    borderRadius: 20,
    paddingVertical: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  imageContainer: {
    backgroundColor: "yellow",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxHeight: 90,
  },
});
