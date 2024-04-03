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
import { collection, addDoc, getFirestore } from "firebase/firestore";
export default function App() {
  const Stack = createNativeStackNavigator();
  const navRef = useRef();
  const [favs, setFavs] = useState({});
  const [movieL, setMovieL] = useState([]);
  const db = getFirestore(FireApp);
  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      for (let i = 1; i < 11; i += 1) {
        data = data.concat(await getData(i));
      }
      setMovieL(data);
    };

    const addUserToFirestore = async () => {
      try {
        // const docRef = await addDoc(collection(db, "users"), {
        //   first: "Ada",
        //   last: "Lovelace",
        //   born: 1815,
        // });
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    fetchData();
    addUserToFirestore();
  }, []);

  const appContext = {
    navRef: navRef,
    favs: [favs, setFavs],
    movies: [movieL, setMovieL],
    db: db,
  };

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
