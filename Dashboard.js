import { useState } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import NaviHome from "./NaviHome";

import UserProfile from "./components/UserProfile";
import { FavoritesContext } from "./AppContext";
import Polling from "./components/polling/Polling";

export default function Dashboard() {
  const [index, setIndex] = useState(0);
  const [favs, setFavs] = useState({});
  const favsContext = {
    favs: [favs, setFavs],
  };
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
    {
      key: "poll",
      title: "Po",
      focusedIcon: "poll",
      unfocusedIcon: "poll",
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
      case "poll":
        return <Polling />;
      default:
        return null;
    }
  };

  return (
    <FavoritesContext.Provider value={favsContext}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
        barStyle={{ backgroundColor: "#72A98F" }}
      />
    </FavoritesContext.Provider>
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
