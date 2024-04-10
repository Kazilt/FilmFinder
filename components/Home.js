import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import MovieCard from "./MovieCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MoviesContext } from "../AppContext";

export default function Home() {
  const movieL = useContext(MoviesContext).movies[0];
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContent}>
        Movies showing that you might like:
      </Text>
      {movieL.length === 0 ? (
        <Text style={styles.textContent}>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {movieL.map((movie, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => nav.navigate("MovieDetails", { movie })}
              >
                <MovieCard movie={movie} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#3D5A6C',
    alignItems: 'center',
    justifyContent: 'center',
=======
    backgroundColor: "#3D5A6C",
    alignItems: "center",
    justifyContent: "center",
>>>>>>> dbe6f39a9a567d6517404ecd17649fd3d7d81807
  },
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textContent: {
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});
