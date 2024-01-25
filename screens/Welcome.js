import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { AntDesign } from "@expo/vector-icons";

function Welcome({ navigation }) {
  function loginWithGoogleHandler() {}
  function loginWithAnonymousHandler() {
    navigation.navigate("RootView");
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={[styles.image]}
          source={require("../assets/images/ic_welcome.png")}
        />
      </View>
      <View>
        <Text style={styles.title}>Chào mừng bạn trở lại</Text>
        <Text style={styles.subTitle}>
          Tiếp tục quản lý và kiểm soát tài chính của bạn với sự tiện lợi và
          sáng tạo
        </Text>
      </View>
      <Pressable
        onPress={loginWithGoogleHandler}
        android_ripple="#ccc"
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.buttonContainer, styles.buttonGoogle]}>
          <AntDesign
            name="google"
            size={24}
            color={GlobalStyles.colors.primary40}
          />
          <Text
            style={[
              styles.textButton,
              { color: GlobalStyles.colors.primary40 },
            ]}
          >
            Đăng nhập với Google
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={loginWithAnonymousHandler}
        android_ripple="#ccc"
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.buttonContainer, styles.buttonAnonymous]}>
          <AntDesign name="arrowright" size={24} color="white" />
          <Text style={[styles.textButton, { color: "white" }]}>
            Bỏ qua và khám phá ngay!
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
  title: {
    marginTop: 10,
    color: GlobalStyles.colors.primary40,
    textAlign: "center",
    fontSize: 38,
    marginHorizontal: 10,
  },
  subTitle: {
    color: GlobalStyles.colors.secondary40,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonGoogle: {
    backgroundColor: GlobalStyles.colors.primary90,
  },
  buttonAnonymous: {
    backgroundColor: GlobalStyles.colors.gradient,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.5,
  },
});
