import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Img_path } from "../apicalls/apicalls";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import { AppContext } from "../AppContext";
const MovieDetails = ({ route }) => {
  // Extracting the movie data from the route params
  const { movie } = route.params;
  const nav = useNavigation();
  a = useContext(AppContext);
  const [favs, setFavs] = a.favs;
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <TouchableOpacity
          style={styles.back_button}
          onPress={() => {
            nav.goBack();
          }}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: Img_path + movie.poster_path }}
          style={styles.poster}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
          <Text style={styles.overview}>
            Rating: {movie.vote_average + "/10 (" + movie.vote_count + ")"}
          </Text>
          <Text style={styles.releaseDate}>
            Release Date: {movie.release_date}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              let title = movie.original_title.replace(/\s+/g, "+");
              WebBrowser.openBrowserAsync(
                "https://www.google.com/search?q=" + title + "+showtimes"
              );
            }}
          >
            <Text style={styles.buttonText}>Buy Tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFavs((prevFavs) => {
                if (!(movie.title in prevFavs)) {
                  return { ...prevFavs, [movie.title]: movie };
                } else {
                  const updatedFavs = { ...prevFavs };
                  delete updatedFavs[movie.title];
                  return updatedFavs;
                }
              });
            }}
          >
            <Text style={styles.buttonText}>
              {movie.title in favs ? "Unfavorite" : "Favorite"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3D5A6C",
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#FF7F7F",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  overview: {
    fontSize: 16,
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 16,
    color: "#636363",
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  back_button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MovieDetails;
