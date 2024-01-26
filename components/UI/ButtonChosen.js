import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";
function ButtonChosen({ img, title, amount, onPress }) {
  return (
    <Pressable
      android_ripple="#ccc"
      style={[
        ({ pressed }) => pressed && styles.pressed,
        { flex: 1, marginVertical: 10 },
      ]}
      onPress={onPress}
    >
      <View style={styles.rootContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={img} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>Số dư: {amount}đ</Text>
        </View>
        <View style={styles.navigateContainer}>
          <Ionicons name="caret-forward" size={24} color="black" />
        </View>
      </View>
    </Pressable>
  );
}

export default ButtonChosen;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.2,
  },
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 4,
    flexDirection: "column",
    marginLeft: 20,
  },
  title: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  amount: {},
  navigateContainer: {
    flex: 1,
  },
});
