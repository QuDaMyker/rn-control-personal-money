import { LinearGradient } from "expo-linear-gradient";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
function Transaction() {
  const [year, setYear] = useState(new Date().getFullYear());

  const [month, setMonth] = useState(new Date().getMonth() + 1);

  function backYearHandler() {
    setYear(year - 1);
  }

  function forwardYearHandler() {
    setYear(year + 1);
  }

  function backMonthHandler() {
    setMonth(month === 1 ? 12 : month - 1);
  }

  function forwardMonthHandler() {
    setMonth(month === 12 ? 1 : month + 1);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[GlobalStyles.colors.primary80, GlobalStyles.colors.primary40]}
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 12 }}
      >
        <View style={styles.rootContainer}>
          {/* header */}
          <View style={styles.headerContainer}>
            <View style={{ flex: 1 }}></View>
            <Text style={styles.textHeader}>Giao dịch</Text>
            <View style={[styles.imgFilter]}>
              <AntDesign name="filter" size={24} color="white" />
            </View>
          </View>
          {/* chose year */}
          <View style={styles.yearContainer}>
            <Pressable
              onPress={backYearHandler}
              android_ripple="#ccc"
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.backContainer}>
                <Ionicons name="caret-back" size={24} color="black" />
              </View>
            </Pressable>
            <View>
              <Text style={styles.textYear}>{year}</Text>
            </View>
            <Pressable
              onPress={forwardYearHandler}
              android_ripple="#ccc"
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.forwardContainer}>
                <Ionicons name="caret-forward" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          {/* chose month */}
          <View style={styles.yearContainer}>
            <Pressable
              onPress={backMonthHandler}
              android_ripple="#ccc"
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.backContainer}>
                <Ionicons name="caret-back" size={24} color="black" />
              </View>
            </Pressable>
            <View style={styles.listMonth}>
              <View style={[styles.textMonthContainer, { opacity: 0.5 }]}>
                <Text style={styles.textMonth}>
                  Tháng {month - 1 === 0 ? 12 : month - 1}
                </Text>
              </View>
              <View style={[styles.textMonthContainer, styles.monthActive]}>
                <Text style={[styles.textMonth, { color: "white" }]}>
                  Tháng {month}
                </Text>
              </View>
              <View style={[styles.textMonthContainer, { opacity: 0.5 }]}>
                <Text style={styles.textMonth}>Tháng {month + 1}</Text>
              </View>
            </View>
            <Pressable
              onPress={forwardMonthHandler}
              android_ripple="#ccc"
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.forwardContainer}>
                <Ionicons name="caret-forward" size={24} color="black" />
              </View>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Transaction;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textHeader: {
    flex: 2,
    fontSize: 28,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary40,
  },
  imgFilter: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary40,
    backgroundColor: GlobalStyles.colors.primary40,
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  yearContainer: {
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.secondary80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  backContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
  },
  textYear: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
  },
  forwardContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
  },
  listMonth: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  textMonthContainer: {
    backgroundColor: "white",
    padding: 5,
    maxWidth: 100,
    marginHorizontal: 3,
    borderRadius: 5,
  },
  monthActive: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary40,
  },
  textMonth: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
  },
});
