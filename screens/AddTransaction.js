import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Chip, TextInput } from "react-native-paper";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonChosen from "../components/UI/ButtonChosen";
import Input from "../components/UI/Input";

function AddTransaction() {
  const [selectedChip, setSelectedChip] = useState(0);
  const [text, setText] = useState("");
  const chipPressHandler = (index) => {
    setSelectedChip(index);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[GlobalStyles.colors.primary80, "white"]}
        style={{ flex: 1, paddingHorizontal: 16, paddingTop: 12 }}
      >
        <ScrollView>
          <View style={styles.rootContainer}>
            {/* header */}
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Thêm giao dịch</Text>
            </View>
            {/* chip */}
            <View style={styles.chipContainer}>
              <Text style={styles.textBase}>Loại giao dịch</Text>
              <View style={styles.chipGroup}>
                <Chip
                  icon=""
                  onPress={() => chipPressHandler(0)}
                  selected={selectedChip === 0}
                  textStyle={[
                    selectedChip === 0
                      ? { color: "white" }
                      : { color: "black" },
                  ]}
                  style={[
                    selectedChip === 0
                      ? styles.chipChecked
                      : styles.chipUncheck,
                    styles.chipItem,
                  ]}
                >
                  Thu
                </Chip>
                <Chip
                  icon=""
                  onPress={() => chipPressHandler(1)}
                  selected={selectedChip === 1}
                  textStyle={[
                    selectedChip === 1
                      ? { color: "white" }
                      : { color: "black" },
                  ]}
                  style={[
                    selectedChip === 1
                      ? styles.chipChecked
                      : styles.chipUncheck,
                    styles.chipItem,
                  ]}
                >
                  Chi
                </Chip>
                <Chip
                  icon=""
                  onPress={() => chipPressHandler(2)}
                  selected={selectedChip === 2}
                  // mode="outlined"
                  textStyle={[
                    selectedChip === 2
                      ? { color: "white" }
                      : { color: "black" },
                  ]}
                  style={[
                    selectedChip === 2
                      ? styles.chipChecked
                      : styles.chipUncheck,
                    styles.chipItem,
                  ]}
                >
                  Chuyển tiền
                </Chip>
              </View>
            </View>
            {/* vi tien */}
            <View style={styles.walletContainer}>
              <Text style={styles.textBase}>Ví tiền</Text>
              <ButtonChosen
                img={require("../assets/images/ic_example.jpg")}
                title="Tiền tiêu"
                amount="5.000.000"
                onPress={() => {}}
              />
            </View>
            {/* tai khoan  */}
            <View style={styles.walletContainer}>
              <Text style={styles.textBase}>Tài khoản</Text>
              <ButtonChosen
                img={require("../assets/images/ic_example.jpg")}
                title="Tiền tiêu"
                amount="5.000.000"
                onPress={() => {}}
              />
            </View>
            {/* danh muc */}
            <View style={styles.walletContainer}>
              <Text style={styles.textBase}>Danh mục</Text>
              <ButtonChosen
                img={require("../assets/images/ic_example.jpg")}
                title="Tiền tiêu"
                amount="5.000.000"
                onPress={() => {}}
              />
            </View>

            {/* input so tien  */}
            <View style={styles.walletContainer}>
              <Text style={styles.textBase}>Số tiền</Text>
              <TextInput
                mode="outlined"
                label="Số tiền"
                textColor="black"
                outlineColor="black"
                activeOutlineColor="black"
                contentStyle={{ borderColor: "black" }}
                style={styles.amountTextInput}
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
            {/* ghi chu */}
            <View style={styles.walletContainer}>
              <Text style={styles.textBase}>Ghi Chú</Text>
              <TextInput
                mode="outlined"
                label="Số tiền"
                textColor="black"
                outlineColor="black"
                activeOutlineColor="black"
                contentStyle={{ borderColor: "black" }}
                style={styles.amountTextInput}
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
            {/* input ngay giao dich */}
            <View style={styles.walletContainer}>
              <Text style={styles.textBase}>Ngày giao dịch</Text>
              <TextInput
                mode="outlined"
                label="Số tiền"
                textColor="black"
                outlineColor="black"
                activeOutlineColor="black"
                contentStyle={{ borderColor: "black" }}
                style={styles.amountTextInput}
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
            {/* input thoi gian giao dich */}
            <View>
              <Text style={styles.textBase}>Thời gian giao dịch</Text>
              <TextInput
                mode="outlined"
                label="Số tiền"
                textColor="black"
                outlineColor="black"
                activeOutlineColor="black"
                contentStyle={{ borderColor: "black" }}
                style={styles.amountTextInput}
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
            {/* button save  */}
            <Pressable
              android_ripple="#ccc"
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Lưu</Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default AddTransaction;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  rootContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  // header
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: GlobalStyles.colors.primary40,
    fontSize: 28,
    fontWeight: "bold",
  },
  // chip
  chipContainer: {
    flex: 1,
    flexDirection: "column",
  },
  textBase: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  chipGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  chipItem: {
    //borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 3,
  },
  chipUncheck: {
    backgroundColor: "white",
    color: "black",
  },
  chipChecked: {
    backgroundColor: GlobalStyles.colors.primary40,
    color: "white",
  },
  // wallet
  walletContainer: {
    marginVertical: 10,
  },
  amountTextInput: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary40,
    flex: 1,
    borderRadius: 20,
    marginVertical: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
});
