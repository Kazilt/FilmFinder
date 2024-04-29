import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import NaviHome from "./NaviHome";

import UserProfile from "./components/UserProfile";
import { AppContext, FavoritesContext, PollsContext } from "./AppContext";
import Polling from "./components/polling/Polling";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {
  const [index, setIndex] = useState(0);
  appC = useContext(AppContext);
  const [favs, setFavs] = useState({});
  const cPoll = useState(null);
  const [pollId, setPollId] = useState(null);
  const selectedMovs = useState({});
  const date = useState(null);
  useEffect(() => {
    const getFavs = async () => {
      const userRef = doc(appC.db, "users", appC.user[0]);
      ini_favs = (await getDoc(userRef)).data();
      if ("favorites" in ini_favs) {
        setFavs(ini_favs.favorites);
      }
    };
    getFavs();
  }, []);

  const favsContext = {
    favs: [favs, setFavs],
  };
  const pollsContext = {
    pollId: [pollId, setPollId],
    selectedMovs: selectedMovs,
    cPoll: cPoll,
    date: date,
  };
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "search",
      title: "Search",
      focusedIcon: "card-search",
      unfocusedIcon: "card-search-outline",
    },
    {
      key: "liked",
      title: "Favorites",
      focusedIcon: "star-circle",
      unfocusedIcon: "star-circle-outline",
    },
    {
      key: "poll",
      title: "Poll",
      focusedIcon: "poll",
      unfocusedIcon: "poll",
    },
    {
      key: "profile",
      title: "Profile",
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
      case "poll":
        return <Polling />;
      default:
        return null;
    }
  };

  return (
    <FavoritesContext.Provider value={favsContext}>
      <PollsContext.Provider value={pollsContext}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          labeled={true}
          barStyle={{ backgroundColor: "#72A98F" }}
        />
      </PollsContext.Provider>
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
