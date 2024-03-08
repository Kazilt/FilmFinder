import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Img_path } from '../apicalls/apicalls';
const MovieDetails = ({ route }) => {
  // Extracting the movie data from the route params
  const { movie } = route.params;
  
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
      <Image source={{ uri: Img_path + movie.poster_path }} style={styles.poster} />
      <View style = {styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.overview}>Rating: {movie.vote_average + "/10 (" + movie.vote_count + ")"}</Text>
        <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy Tickets</Text>
          </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000',
    flexGrow: 1
  },
  container: {
    backgroundColor: '#FF7F7F',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
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
    alignSelf: 'center'
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overview: {
    fontSize: 16,
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 16,
    color: '#636363',
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieDetails;