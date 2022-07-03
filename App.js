import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// load pages
import Login from "./src/pages/Login";
import Dashboard from "./src/pages/Dashboard";
import Scanner from "./src/pages/Scanner";
import History from "./src/pages/History";
import Profile from "./src/pages/Profile";
import Notification from "./src/pages/Notification";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
