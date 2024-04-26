import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { PollsContext } from "../../AppContext";

export default function Pname({ navigation }) {
  const [pollTitle, setPollTitle] = useState("");
  setSelectedMovs = useContext(PollsContext).selectedMovs[1];
  setCPoll = useContext(PollsContext).cPoll[1];

  const handleCreatePoll = () => {
    // Here you can handle the creation of the poll with the entered title

    setSelectedMovs({});
    setCPoll(pollTitle);
    navigation.navigate("MovieChoice");
  };
  const createRandID = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
    setPollTitle(randomId);
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
      <TouchableOpacity style={styles.button} onPress={createRandID}>
        <Text style={styles.buttonText}>Suggest Poll ID</Text>
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
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
