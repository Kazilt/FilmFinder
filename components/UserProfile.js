import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const redTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff0000', 
    accent: '#ff0000',
  },
};

const UserProfile = () => {
  const handleSaveInfo = () => {
    // Handle saving credit card info and address
  };

  return (
    <PaperProvider theme={redTheme}>
      <View style={[styles.container, { backgroundColor: 'black' }]}>
        <TextInput
          label="Card Number"
          mode="outlined"
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
          onPress={handleSaveInfo}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});

export default UserProfile;
