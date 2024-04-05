import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Searchbar } from "react-native-paper";
import MovieCard from "../MovieCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MoviesContext } from "../../AppContext";

export default function MovieChoice() {
  const [searchQuery, setSearchQuery] = useState("");
  const movieL = useContext(MoviesContext).movies[0];
  const [filteredMovieL, setFilteredMovieL] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    // Filter movieL based on search query
    const filteredMovies = movieL.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovieL(filteredMovies);
  }, [searchQuery, movieL]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sc}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.search}
        />
      </View>
      {filteredMovieL.length === 0 ? (
        <Text style={styles.textContent}>No Results Found</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {filteredMovieL.map((movie, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => nav.navigate("PollDetails", { movie })}
              >
                <MovieCard movie={movie} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          nav.navigate("Poll");
        }}
      >
        <Text style={styles.buttonText}>Finish Poll</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D5A6C",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textContent: {
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  search: {
    marginTop: 5,
  },
  sc: {
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    margin: 10,
  },
});
