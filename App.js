import { StatusBar } from "expo-status-bar";
import { Settings, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationContainer from "./node_modules/@react-navigation/native/lib/module/NavigationContainer";
import Welcome from "./screens/Welcome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import { GlobalStyles } from "./constants/styles";
import Transaction from "./screens/Transaction";
import AddTransaction from "./screens/AddTransaction";
import Statistics from "./screens/Statistics";
import Setting from "./screens/Setting";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import FilterTransaction from "./screens/FilterTransaction";
import ChosenCategory from "./screens/ChosenCategory";
import ChosenWallet from "./screens/ChosenWallet";
import ChosenAccount from "./screens/ChosenAccount";
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function RootView() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: GlobalStyles.colors.primary40,
        tabBarActiveBackgroundColor: GlobalStyles.colors.secondary80,
        tabBarItemStyle: { borderRadius: 5, flex: 1 },
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="manage-history" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{
          headerShown: false,
          tabBarLabel: "Thêm giao dịch",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="sitemap-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor={GlobalStyles.colors.primary60} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="RootView"
            component={RootView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FilterTransaction"
            component={FilterTransaction}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChosenCategory"
            component={ChosenCategory}
            options={{
              title: "Chọn Danh mục",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="ChosenWallet"
            component={ChosenWallet}
            options={{
              title: "Chọn Ví tiền",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="ChosenAccount"
            component={ChosenAccount}
            options={{
              title: "Chọn Tài khoản",
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
