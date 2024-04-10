import React, { useEffect, useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import MovieCard from "./MovieCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../AppContext";

export default function Favorites({ route }) {
  const nav = useNavigation();
  const movieL = useContext(FavoritesContext).favs[0];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContent}>Favorites:</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {Object.keys(movieL).length === 0 ? (
          <Text style={styles.loadingText}>No favorites currently</Text>
        ) : (
          Object.keys(movieL).map((key, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                nav.navigate("MovieDetails", { movie: movieL[key] })
              }
            >
              <MovieCard movie={movieL[key]} />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
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
    paddingTop: 20, // Added padding to separate text from cards
  },
  textContent: {
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  loadingText: {
    alignSelf: "center",
    padding: 10,
    fontSize: 16,
    color: "#FFF",
  },
});
