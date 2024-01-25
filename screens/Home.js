import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { AntDesign, Ionicons, Foundation } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";
import BigButton from "../components/UI/BigButton";
import { LinearGradient } from "expo-linear-gradient";
import SmallButton from "../components/UI/SmallButton";
import TargetItem from "../components/UI/TargetItem";
import { DUMMY_DATA } from "../utils/data";
function Home() {
  const { width, height } = useWindowDimensions();
  let imageSize = 60;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  function renderTargetItemHandler(itemData) {
    return <TargetItem {...itemData.item} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[GlobalStyles.colors.primary80, GlobalStyles.colors.primary40]}
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 12 }}
      >
        <ScrollView>
          {/* header information  */}
          <View>
            <View style={styles.infoContainer}>
              <View style={[styles.imgAvtContainer, imageStyle]}>
                <Image
                  source={{
                    uri: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/415000063_1730636664013186_3373812410493443080_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=x8L0ib17O84AX-d1nHN&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDIZKh9csPLQ0nHgWk9Cn-c4UnskOhrYUqhTfHBNeUj4g&oe=65B87E93",
                  }}
                  style={styles.imgAvt}
                />
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.titleAmount}>Số dư hiện tại</Text>
                <View style={styles.amount}>
                  <Text style={styles.amountText}>20,000,000đ</Text>
                  <AntDesign name="eyeo" size={24} color="black" />
                </View>
              </View>
              <View style={[styles.imgNotification]}>
                <Ionicons name="notifications" size={40} color="white" />
              </View>
            </View>
          </View>
          {/* big button  */}
          <View style={styles.bigButtonContainer}>
            <BigButton
              title="Tài khoản của bạn"
              image={require("../assets/images/ic_money.png")}
            />
            <BigButton
              title="Ví tiền của bạn"
              image={require("../assets/images/ic_money_1.png")}
            />
          </View>
          {/* small button  */}
          <View style={styles.smallButtonContainer}>
            <SmallButton
              name="cart-shopping"
              colorIcon="white"
              title="Danh mục"
              onPress={() => {}}
            />
            <SmallButton
              name="money-bill-1"
              colorIcon="white"
              title="Khoản vay"
              onPress={() => {}}
            />
            <SmallButton
              name="recycle"
              colorIcon="white"
              title="Chuyển đổi"
              onPress={() => {}}
            />
          </View>
          {/* list muc tieu  */}
          <View style={styles.targetContainer}>
            <View style={styles.targetTextContainer}>
              <Foundation name="target-two" size={24} color="black" />
              <Text style={styles.targetText}>Mục tiêu</Text>
            </View>
            <View style={styles.targetList}>
              <FlatList
                data={DUMMY_DATA}
                renderItem={renderTargetItemHandler}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imgAvtContainer: {
    borderWidth: 2,
    overflow: "hidden",
  },
  imgAvt: { width: "100%", height: "100%" },
  amountContainer: {
    flexDirection: "column",
  },
  titleAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  amount: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountText: {
    fontSize: 14,
    marginRight: 2,
    fontWeight: "500",
  },
  imgNotification: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary40,
    backgroundColor: GlobalStyles.colors.primary40,
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  // big button
  bigButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  // small button
  smallButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  // target
  targetContainer: {},
  targetTextContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  targetText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
  targetList: {},
});
