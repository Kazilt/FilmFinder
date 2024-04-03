import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useContext, useRef } from "react";
import { doc, getDoc, setDoc, collection, addDoc } from "firebase/firestore";
import { AppContext } from "../AppContext";
export default function Login({ navigation }) {
  const username = useRef("");
  const password = useRef("");
  const appContext = useContext(AppContext);
  const db = appContext.db;
  const handleSignIn = async () => {
    try {
      const usernameValue = username.current;
      const passwordValue = password.current;

      // Check if username or password is empty
      if (!usernameValue || !passwordValue) {
        alert("Username or password cannot be empty.");
        return;
      }

      // Retrieve user document from Firestore
      const userRef = doc(db, "users", usernameValue);
      const userSnapshot = await getDoc(userRef);

      // Check if user exists and password is correct
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        if (userData.password === passwordValue) {
          appContext.user[1](usernameValue);
          alert("User signed in successfully.");

          // Navigate to Dashboard after signin
          navigation.replace("Dashboard");
        } else {
          alert("Incorrect password. Please try again.");
        }
      } else {
        alert("User does not exist. Please sign up first.");
      }
    } catch (error) {
      alert("Error signing in:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const usernameValue = username.current;
      const passwordValue = password.current;

      // Check if username or password is empty
      if (!usernameValue || !passwordValue) {
        alert("Username or password cannot be empty.");
        return;
      }

      // Check if username already exists
      const userRef = doc(db, "users", usernameValue);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        alert("Username already exists. Please choose a different username.");
        return;
      }
      await setDoc(userRef, { password: passwordValue });
      alert("User signed up successfully.");
      appContext.user[1](usernameValue);
      navigation.replace("Dashboard");
    } catch (error) {
      alert("Error signing up:", error);
    }
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
