import { Pressable, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { GlobalStyles } from "../../constants/styles";
function TargetItem({ title, amount, remainAmount, time, valueIndicators }) {
  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.remainAmount}>
            Còn lại {remainAmount} trong {time} ngày
          </Text>
        </View>
        <View style={styles.valueIndicators}>
          <CircularProgress
            value={valueIndicators}
            inActiveStrokeColor={GlobalStyles.colors.primary60}
            inActiveStrokeOpacity={0.2}
            progressValueColor={GlobalStyles.colors.primary40}
            valueSuffix={"%"}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default TargetItem;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    borderRadius: 20,
    marginRight: 20,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: "column",
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  amount: {
    fontSize: 16,
    color: GlobalStyles.colors.primary40,
    fontWeight: "bold",
  },
  remainAmount: {},
  valueIndicators: {},
});
