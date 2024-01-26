import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from "react-native-gifted-charts";
import { TabView, SceneMap } from "react-native-tab-view";
import { useState } from "react";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
function Statistics() {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
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
              <View>
                <TabView
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  initialLayout={{ width: layout.width }}
                />
              </View>
            </View>
          </View>
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
});
