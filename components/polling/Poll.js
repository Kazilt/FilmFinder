import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RNPoll, { IChoice } from "react-native-poll";
import { SafeAreaView } from "react-native-safe-area-context";
import { PollsContext } from "../../AppContext";
import { useNavigation } from "@react-navigation/native";

const Poll = () => {
  const pContext = useContext(PollsContext);
  console.log(pContext);
  const date = pContext.date[0];
  console.log(date.toDateString());
  const ini_movs = Object.keys(pContext.selectedMovs[0]).map((mov, key) => {
    return { id: key, choice: mov, votes: 0 };
  });
  const [choices, setChoices] = useState(ini_movs);
  const [totalVotes, setTotal] = useState(
    choices.reduce((total, choice) => total + choice.votes, 0)
  );

  const [pollID, setPollID] = pContext.pollId;
  const nav = useNavigation();
  const handleChoicePress = (selectedChoice) => {
    console.log("SelectedChoice: ", selectedChoice);
    // You can handle the selected choice here, like updating the UI or sending data to a server
    setChoices((prev) => {
      prev[selectedChoice.id].votes += 1;
      return prev;
    });
    setTotal((prev) => {
      return prev + 1;
    });
  };
  const leavePoll = () => {
    setPollID(null);
    nav.navigate("Corj");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pollID}>Poll ID: {pollID}</Text>
      <Text style={styles.pollID}>Date: {date.toDateString()}</Text>
      <View style={styles.pollContainer}>
        <RNPoll
          totalVotes={totalVotes}
          choices={choices}
          onChoicePress={handleChoicePress}
          disableBuiltInIncreaseVote={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={leavePoll}>
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
