import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Pname({ navigation }) {
  const [pollTitle, setPollTitle] = useState("");

  const handleCreatePoll = () => {
    // Here you can handle the creation of the poll with the entered title
    console.log("Poll Title:", pollTitle);
    navigation.navigate("MovieChoice");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter poll ID"
        placeholderTextColor={"#FFF"}
        value={pollTitle}
        onChangeText={(text) => setPollTitle(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreatePoll}>
        <Text style={styles.buttonText}>Create Poll</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D5A6C",
  },
  input: {
    width: "80%",
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 30,
    color: "#FFF",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
