import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CustomIconButton({ iconName, text, onPress, style }) {
  return (
    <Pressable>
      <View>
        <Ionicons name={iconName} />
      </View>
    </Pressable>
  );
}

export default CustomIconButton;
