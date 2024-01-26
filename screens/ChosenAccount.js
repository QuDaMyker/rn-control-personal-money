import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

function ChosenAccount() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[GlobalStyles.colors.primary80, "white"]}
        style={{ flex: 1, paddingHorizontal: 16, paddingTop: 12 }}
      >
        <ScrollView>
          <View style={styles.rootContainer}>
            <View>
              <Text style={styles.headerText}>Chọn danh mục</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default ChosenAccount;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
