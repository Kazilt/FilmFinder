import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TouchableOpacity  } from 'react-native';
import { Text } from 'react-native-paper';
import { getData } from '../apicalls/apicalls';
import MovieCard from './MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation } from '@react-navigation/native';

export default function Home() {
  
  const [movieL, setMovieL] = useState([])
  const nav = useNavigation()
  useEffect(() => {
    const fetchData = async () => {
      let data = []
      for (let i=1; i < 8; i += 1) {
        data = data.concat(await getData(i))
        
      }
      setMovieL(data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.textContent}>Movies showing that you might like:</Text>
      {movieL.length === 0 ? (
          <Text style = {styles.textContent}>Loading...</Text>
        ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {movieL.map((movie, i) => {
            return (<TouchableOpacity key={i} onPress={() => nav.navigate('MovieDetails', { movie })}>
            <MovieCard movie={movie} />
          </TouchableOpacity>);
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
    backgroundColor: '#000',
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
    fontWeight: 'bold',
    color: '#FFF'
  }
});