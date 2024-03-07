import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { getData } from '../apicalls/apicalls';
import MovieCard from './MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

  const [movieL, setMovieL] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setMovieL(data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.textContent}>Movies showing that you might like:</Text>
      {movieL.length === 0 ? (
          <Text>Loading...</Text>
        ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {movieL.map((mov, i) => {
            return <MovieCard movie={mov} key={i} />;
          })}
        </ScrollView>) 
        }
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  textContent: {
    alignSelf: 'flex-start',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
});