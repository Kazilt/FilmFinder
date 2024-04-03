import { useState, createContext } from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Default from "./Default";
import NaviHome from "./NaviHome";

import { FavoriteContext } from "./FavoriteContext";
import UserProfile from "./components/UserProfile";

export default function Dashboard() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "H",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "search",
      title: "S",
      focusedIcon: "card-search",
      unfocusedIcon: "card-search-outline",
    },
    {
      key: "liked",
      title: "L",
      focusedIcon: "star-circle",
      unfocusedIcon: "star-circle-outline",
    },
    {
      key: "profile",
      title: "P",
      focusedIcon: "account-circle",
      unfocusedIcon: "account-circle-outline",
    },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "home":
        return <NaviHome type="Home" />;
      case "search":
        return <NaviHome type="Search" />;
      case "liked":
        return <NaviHome type="Favorites" />;
      case "profile":
        return <UserProfile />;
      default:
        return null;
    }
  };
  const [favs, setFavs] = useState({});

  return (
    <FavoriteContext.Provider value={[favs, setFavs]}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
        barStyle={{ backgroundColor: "#72A98F" }}
      />
    </FavoriteContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
