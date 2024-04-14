import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import RNPoll, { IChoice } from "react-native-poll";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext, PollsContext } from "../../AppContext";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";

const Poll = ({ route }) => {
  const beenVoted = route.params;
  const pContext = useContext(PollsContext);
  const [date, setDate] = useState("");
  const [choices, setChoices] = useState([]);
  const [pollID, setPollID] = pContext.pollId;
  const [totalVote, setTotalVote] = useState(0);
  const uid = useContext(AppContext).user[0];
  const db = useContext(AppContext).db;

  useEffect(() => {
    const usub = onSnapshot(doc(db, "polls", pollID), (doc) => {
      const data = doc.data();
      setTotalVote(data.total);
      setDate(data.date);
      setChoices(data.votes);
    });
    return () => usub();
  });

  const nav = useNavigation();
  const handleChoicePress = (selectedChoice) => {
    const appChoice = async () => {
      let ref = doc(db, "polls", pollID);
      nv = choices;
      nv[selectedChoice.id].votes += 1;
      setDoc(ref, {
        date: date,
        total: totalVote + 1,
        votes: nv,
      });
      const uref = doc(db, "users", uid, "voted", pollID);
      // const curr = await getDoc(uref)

      setDoc(uref, { pollID: pollID });

      const votes_ref = doc(db, "stats", "votes");
      let votes_snapshot = await getDoc(votes_ref);
      var vote_data = {};
      if (votes_snapshot.exists()) {
        vote_data = votes_snapshot.data();
      }
      if (selectedChoice.choice in vote_data) {
        vote_data[selectedChoice.choice] += 1;
      } else {
        vote_data[selectedChoice.choice] = 1;
      }
      setDoc(votes_ref, vote_data);
    };
    appChoice();
  };
  const leavePoll = () => {
    nav.navigate("Corj");
    // setPollID(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pollID}>Poll ID: {pollID}</Text>
      <Text style={styles.pollID}>Date: {date}</Text>
      <View style={styles.pollContainer}>
        <RNPoll
          totalVotes={totalVote}
          choices={choices}
          onChoicePress={handleChoicePress}
          disableBuiltInIncreaseVote={true}
          hasBeenVoted={beenVoted}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={leavePoll}>
        <Text style={styles.buttonText}>Leave Poll</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Clipboard.setString(pollID);
        }}
      >
        <Text style={styles.buttonText}>Copy Poll ID</Text>
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
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Poll;
