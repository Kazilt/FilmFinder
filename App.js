import Dashboard from "./Dashboard";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import { AppContext } from "./AppContext";
import { getData } from "./apicalls/apicalls";
import { useRef, useState, useEffect } from "react";
import { FireApp } from "./Firebase";
import { getFirestore } from "firebase/firestore";
import { MoviesContext } from "./AppContext";
import { LogBox } from "react-native";
export default function App() {
  LogBox.ignoreLogs(["Clipboard"]);
  const Stack = createNativeStackNavigator();
  const navRef = useRef();
  const [movieL, setMovieL] = useState([]);
  const db = getFirestore(FireApp);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      for (let i = 1; i < 3; i += 1) {
        data = data.concat(await getData(i));
      }
      setMovieL(data);
    };

    fetchData();
  }, []);
  const moviesContext = {
    movies: [movieL, setMovieL],
  };
  const appContext = {
    navRef: navRef,
    db: db,
    user: [user, setUser],
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppContext.Provider value={appContext}>
          <MoviesContext.Provider value={moviesContext}>
            <NavigationContainer ref={navRef}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
              </Stack.Navigator>
            </NavigationContainer>
          </MoviesContext.Provider>
        </AppContext.Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
