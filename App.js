import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import layarutama from "./Screen/layar1";
import layarisi from "./Screen/layar2";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Screen">
        <Stack.Screen name="Home Screen" component={layarutama} options={{ headerShown: false }}/>
        <Stack.Screen name="Main Screen" component={layarisi} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
