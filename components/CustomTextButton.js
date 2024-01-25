import { Pressable, StyleSheet, View } from "react-native";

function CustomTextButton({ text, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple="#ccc"
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View>{text}</View>
    </Pressable>
  );
}

export default CustomTextButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  buttonContainer: {},
  text: {},
});
