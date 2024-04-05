import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RNPoll, { IChoice } from "react-native-poll";
import { SafeAreaView } from "react-native-safe-area-context";

const choices = [
  { id: 1, choice: "Nike", votes: 12 },
  { id: 2, choice: "Adidas", votes: 1 },
  { id: 3, choice: "Puma", votes: 3 },
  { id: 4, choice: "Reebok", votes: 5 },
  { id: 5, choice: "Under Armour", votes: 9 },
];

const Poll = () => {
  const handleChoicePress = (selectedChoice) => {
    console.log("SelectedChoice: ", selectedChoice);
    // You can handle the selected choice here, like updating the UI or sending data to a server
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pollID}>Poll ID: </Text>
      <View style={styles.pollContainer}>
        <RNPoll
          totalVotes={30}
          choices={choices}
          onChoicePress={handleChoicePress}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Finish Poll");
        }}
      >
        <Text style={styles.buttonText}>Leave Poll</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3D5A6C",
  },
  pollID: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pollContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    width: 200,
    margin: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Poll;
