



import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard = ({ movie, key }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "http://image.tmdb.org/t/p/w185" + movie.poster_path }} style={styles.poster} />
    <Text style={styles.title}>{movie.title.length > 18 ? movie.title.slice(0, 16) + '...' : movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'col',
  },
  poster: {
    width: 170,
    height: 297,
    borderRadius: 15,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    alignSelf: 'center'
  },
  genre: {
    fontSize: 16,
    marginBottom: 5,
  },
  year: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#888',
  },
});

export default MovieCard;