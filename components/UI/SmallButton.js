import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";
function SmallButton({ name, colorIcon, title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple="#ccc"
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome6 name={name} size={24} color={colorIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default SmallButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    backgroundColor: GlobalStyles.colors.primary80,
    borderRadius: 12,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    backgroundColor: GlobalStyles.colors.primary40,
    borderRadius: 40,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    marginTop: 10,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
});
