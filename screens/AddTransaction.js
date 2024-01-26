import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonChosen from "../components/UI/ButtonChosen";
function AddTransaction() {
  const [selectedChip, setSelectedChip] = useState(0);

  const chipPressHandler = (index) => {
    setSelectedChip(index);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[GlobalStyles.colors.primary80, GlobalStyles.colors.primary40]}
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 12 }}
      >
        <ScrollView>
          <View style={styles.rootContainer}>
            {/* header */}
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Thêm giao dịch</Text>
            </View>
            {/* chip */}
            <View style={styles.chipContainer}>
              <Text style={styles.chipText}>Loại giao dịch</Text>
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
              <Text style={styles.chipText}>Ví tiền</Text>
              <ButtonChosen
                img={require("../assets/images/ic_example.jpg")}
                title="Tiền tiêu"
                amount="5.000.000"
                onPress={() => {}}
              />
            </View>
            {/* tai khoan  */}
            <View>
              <Text style={styles.chipText}>Tài khoản</Text>
              <ButtonChosen
                img={require("../assets/images/ic_example.jpg")}
                title="Tiền tiêu"
                amount="5.000.000"
                onPress={() => {}}
              />
            </View>
            {/* danh muc */}
            <View>
              <Text style={styles.chipText}>Danh mục</Text>
              <ButtonChosen
                img={require("../assets/images/ic_example.jpg")}
                title="Tiền tiêu"
                amount="5.000.000"
                onPress={() => {}}
              />
            </View>
            {/* input so tien  */}
            {/* input ghi chu  */}
            {/* input ngay giao dich */}
            {/* input thoi gian giao dich */}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default AddTransaction;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
  chipText: {
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
});
