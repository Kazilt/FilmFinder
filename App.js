import Dashboard from "./Dashboard";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import { AppContext } from "./AppContext";
import { useRef, useState } from "react";
export default function App() {
  const Stack = createNativeStackNavigator();
  const navRef = useRef();
  const [favs, setFavs] = useState({});
  const appContext = { navRef: navRef, favs: [favs, setFavs] };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppContext.Provider value={appContext}>
          <NavigationContainer ref={navRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppContext.Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
