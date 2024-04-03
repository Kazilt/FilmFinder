import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useRef } from "react";

export default function Login({ navigation }) {
  const username = useRef("");
  const password = useRef("");
  const handleSignIn = () => {
    // Handle sign in logic
    console.log(username.current + password.current);
    if (true) {
      navigation.replace("Dashboard");
    }
  };

  const handleSignUp = () => {
    // Handle sign up logic
    console.log("Signing up...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TextInput
        label="Username"
        onChangeText={(text) => (username.current = text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        onChangeText={(text) => (password.current = text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        Sign In
      </Button>
      <Text style={styles.or}>or</Text>
      <Button mode="outlined" onPress={handleSignUp} style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#D5FFFF",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
  or: {
    marginVertical: 10,
  },
});
