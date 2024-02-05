import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import { LineChart } from "react-native-gifted-charts";
import { useLayoutEffect, useState } from "react";

function Statistics() {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  const [tabSelected, setTabSelected] = useState(0);
  const [soDuAmount, setSoDuAmount] = useState(0);
  useLayoutEffect(() => {
    setTabSelected(0);
    soDuHandler();
    lineCharHanler();
  }, [tabSelected]);

  function soDuHandler() {
    setSoDuAmount(100000);
  }

  function lineCharHanler() {}
  return (
    <SafeAreaView style={{ flex: 1 }} s>
      <LinearGradient
        colors={[GlobalStyles.colors.primary80, "white"]}
        style={{ flex: 1, paddingHorizontal: 16, paddingTop: 30 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* header  */}
            <View style={styles.headerContainer}>
              <View style={{ flex: 1 }}></View>
              <Text style={styles.textHeader}>Thống kê</Text>
              <View style={[styles.imgFilter]}>
                <MaterialIcons name="content-paste" size={24} color="white" />
              </View>
            </View>
            {/* tab view  */}
            <View style={styles.tabViewContainer}>
              {/* <TabView
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  initialLayout={{ width: layout.width }}
                /> */}
              <View style={styles.tabViewActive}>
                <Text style={styles.tabViewText}>Tuần</Text>
              </View>
              <View style={styles.tabViewUnactive}>
                <Text style={styles.tabViewText}>Tháng</Text>
              </View>
              <View style={styles.tabViewUnactive}>
                <Text style={styles.tabViewText}>Năm</Text>
              </View>
            </View>
            {/* so du  */}
            <View style={styles.soDuContainer}>
              <Text style={styles.soDuText}>Số dư</Text>
              <Text style={styles.soDuAmount}>{soDuAmount}d</Text>
              <View style={styles.soDuItemContainer}>
                <View style={styles.soDuItem}>
                  <Image source={require("../assets/images/ic_thunhap.png")} />
                  <View>
                    <Text style={[styles.soDuText, { fontSize: 14 }]}>
                      Thu nhập
                    </Text>
                    <Text
                      style={[
                        styles.soDuAmount,
                        { fontSize: 12, color: "green" },
                      ]}
                    >
                      +20,000,000
                    </Text>
                  </View>
                </View>
                <View style={styles.soDuItem}>
                  <Image source={require("../assets/images/ic_chitieu.png")} />
                  <View>
                    <Text style={[styles.soDuText, { fontSize: 14 }]}>
                      Chi tiêu
                    </Text>
                    <Text
                      style={[
                        styles.soDuAmount,
                        { fontSize: 12, color: "red" },
                      ]}
                    >
                      -20,000,000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* thu va chi  */}
            <View style={styles.headerSession}>
              <FontAwesome6
                name="filter-circle-dollar"
                size={20}
                color="black"
              />
              <Text style={styles.textSHeader}>Thu & Chi</Text>
            </View>
          </View>
          {/* line char  */}
          <View style={styles.lineCharContainer}>
            <LineChart data={data} />
          </View>
          {/* flat list  */}
          <ScrollView></ScrollView>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Statistics;
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
  tabViewContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: GlobalStyles.colors.secondary80,
    borderRadius: 10,
  },
  tabViewActive: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
  tabViewUnactive: {
    backgroundColor: GlobalStyles.colors.secondary80,
  },
  tabViewText: {
    fontWeight: "600",
    fontSize: 18,
    color: "black",
  },
  soDuContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  soDuItemContainer: {
    flexDirection: "row",
  },
  soDuText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 16,
    color: "black",
  },
  soDuAmount: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 30,
    color: GlobalStyles.colors.primary40,
  },
  soDuItem: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.secondary80,
    marginHorizontal: 10,
  },
  soDuImg: {
    width: 100,
    height: 100,
  },
  headerSession: {
    flexDirection: "row",
    alignItems: "center",
  },
  textSHeader: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  lineCharContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  lineChar: {},
});
