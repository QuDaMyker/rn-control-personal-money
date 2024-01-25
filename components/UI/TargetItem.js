import { Pressable, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
function TargetItem({ title, amount, remainAmount, time, valueIndicators }) {
  return (
    <Pressable onPress={() => {}}>
      <View styles={styles.container}>
        <View styles={styles.textContainer}>
          <Text styles={styles.title}>{title}</Text>
          <Text styles={styles.amount}>{amount}</Text>
          <Text styles={styles.remainAmount}>
            Còn lại {remainAmount} trong {time}
          </Text>
        </View>
        <View styles={styles.valueIndicators}>
          <CircularProgress
            value={valueIndicators}
            inActiveStrokeColor={"#2ecc71"}
            inActiveStrokeOpacity={0.2}
            progressValueColor={"#fff"}
            valueSuffix={"%"}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default TargetItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  amount: { fontSize: 14, fontWeight: "bold" },
  remainAmount: {},
  valueIndicators: {},
});
