<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Text } from 'react-native-paper';
=======
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";
import {
  Button,
  TextInput,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import { Text } from "react-native-paper";
import { AppContext } from "../AppContext";
>>>>>>> dbe6f39a9a567d6517404ecd17649fd3d7d81807

const redTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
<<<<<<< HEAD
    primary: '#72A98F', 
    accent: '#ff0000',
=======
    primary: "#72A98F",
    accent: "#ff0000",
>>>>>>> dbe6f39a9a567d6517404ecd17649fd3d7d81807
  },
};

const UserProfile = () => {
  const handleSaveInfo = () => {
    // Handle saving credit card info and address
  };
  user = useContext(AppContext).user[0];
  const navRef = useContext(AppContext).navRef;
  return (
    <PaperProvider theme={redTheme}>
<<<<<<< HEAD
      
      <View style={[styles.container, { backgroundColor: '#3D5A6C' }]}>
      <Text style={styles.loadingText}>Hello User!</Text>
      <Text style={styles.textContent}>Enter Card Info Here</Text>
=======
      <View style={[styles.container, { backgroundColor: "#3D5A6C" }]}>
        <Text style={styles.loadingText}>Hello {user}!</Text>
        <Text style={styles.textContent}>Enter Card Info Here</Text>
>>>>>>> dbe6f39a9a567d6517404ecd17649fd3d7d81807
        <TextInput
          label="Card Number"
          mode="outlined"
          secureTextEntry={true}
          style={styles.input}
          theme={redTheme}
        />
        <TextInput
          label="Expiration Date"
          mode="outlined"
          style={styles.input}
          theme={redTheme}
        />
        <TextInput
          label="CVV"
          mode="outlined"
          style={styles.input}
          theme={redTheme}
        />
        <TextInput
          label="Address"
          mode="outlined"
          secureTextEntry={true}
          style={styles.input}
          theme={redTheme}
        />
        <Button
          mode="contained"
          onPress={handleSaveInfo}
          style={styles.button}
          theme={redTheme}
        >
          Save Info
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            navRef.current?.dispatch(StackActions.replace("Login"));
          }}
          style={styles.button}
          theme={redTheme}
        >
          Log out
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContent: {
<<<<<<< HEAD
    alignSelf: 'flex-start',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    alignItems: 'center',
  },
  loadingText: {
    alignSelf: 'center',
    padding: 12,
    fontSize: 16,
    margin: 50,
    color: '#FFF',
=======
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    alignItems: "center",
  },
  loadingText: {
    alignSelf: "center",
    padding: 12,
    fontSize: 16,
    margin: 50,
    color: "#FFF",
>>>>>>> dbe6f39a9a567d6517404ecd17649fd3d7d81807
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    width: "100%",
  },
});

export default UserProfile;
