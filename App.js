import "react-native-gesture-handler"; // Make sure to import this before using React Navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HeartIcon from "./components/HeartIcon";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="आरती संग्रह">
        <Stack.Screen name="आरती संग्रह" component={HomeScreen} />
        <Stack.Screen
          name="आरती"
          component={DetailsScreen}
          // options={{
          //   headerTitle: "आरती",
          //   headerRight: () => (
          //     <FontAwesome name="heart-o" size={30} color="red" />
          //   ),
          // }}
          options={{
            headerShown: false, // Disable default header
            header: () => <HeartIcon />, // Use custom header component
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
