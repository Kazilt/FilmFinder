import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {BottomNavigation } from 'react-native-paper';
import Default from './Default';
import NaviHome from './NaviHome';

export default function Dashboard() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'H', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
        { key: 'search', title: 'S', focusedIcon: 'card-search', unfocusedIcon: 'card-search-outline' },
        { key: 'liked', title: 'L', focusedIcon: 'star-circle', unfocusedIcon: 'star-circle-outline' },
        { key: 'profile', title: 'P', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
      ]);
    
      const renderScene = ({ route }) => {
        switch (route.key) {
          case 'home':
            return <NaviHome type = "Home"/>;
          case 'search':
            return <NaviHome type = "Search"/>;
          case 'liked':
            return <Default />;
          case 'profile':
            return <Default />;
          default:
            return null;
        }
      };
    

    return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled = {false}
        barStyle={{ backgroundColor: '#FF0000' }}
      />
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  