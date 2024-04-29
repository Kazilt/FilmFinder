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

const redTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f8333c",
    accent: "#ff0000",
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
      <View style={[styles.container, { backgroundColor: "#00000" }]}>
        <Text style={styles.loadingText}>Hello {user}!</Text>
        <Text style={styles.textContent}>Enter Card Info Here</Text>
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
