import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Searchbar } from 'react-native-paper';
import { getData } from '../apicalls/apicalls';
import MovieCard from './MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieL, setMovieL] = useState([]);
  const [filteredMovieL, setFilteredMovieL] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      let data = []
      for (let i=1; i < 11; i += 1) {
        data = data.concat(await getData(i))
        
      }
      setMovieL(data);
      setFilteredMovieL(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter movieL based on search query
    const filteredMovies = movieL.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredMovieL(filteredMovies);
  }, [searchQuery, movieL]);

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.sc}>
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
              <TouchableOpacity key={i} onPress={() => nav.navigate('MovieDetails', { movie })}>
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
    backgroundColor: '#3D5A6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textContent: {
    alignSelf: 'flex-start',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  search: {
    marginTop: 5,
  },
  sc: {
    width: '100%'
  }
});