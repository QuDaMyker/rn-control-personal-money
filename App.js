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

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function RootView() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Transaction" component={Transaction} />
      <BottomTab.Screen name="AddTransaction" component={AddTransaction} />
      <BottomTab.Screen name="Statistics" component={Statistics} />
      <BottomTab.Screen name="Setting" component={Setting} />
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
