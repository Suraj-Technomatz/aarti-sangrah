import "react-native-gesture-handler"; // Make sure to import this before using React Navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="आरती संग्रह">
        <Stack.Screen name="आरती संग्रह" component={HomeScreen} />
        <Stack.Screen name="आरती" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
