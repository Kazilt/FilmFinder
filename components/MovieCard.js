import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Img_path } from "../apicalls/apicalls";

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image source={Img_path + movie.poster_path} style={styles.poster} />
      <Text style={styles.title}>
        {movie.title.length > 18
          ? movie.title.slice(0, 16) + "..."
          : movie.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "col",
  },
  poster: {
    width: 170,
    height: 297,
    borderRadius: 15,
    marginRight: 10,
  },

  title: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "center",
    color: "#FFF",
  },
});

export default MovieCard;
