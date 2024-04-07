import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { AppContext, PollsContext } from "../../AppContext";
import { doc, getDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
export default function Jname({ navigation }) {
  const [pollTitle, setPollTitle] = useState("");
  const appContext = useContext(AppContext);
  const db = appContext.db;
  const uid = appContext.user[0];
  const setPid = useContext(PollsContext).pollId[1];
  const nav = useNavigation();
  const handleJoinPoll = () => {
    // Here you can handle the creation of the poll with the entered title
    const seePollExists = async () => {
      const ref = doc(db, "polls", pollTitle);
      const snapShot = await getDoc(ref);
      var beenVoted = false;
      if (snapShot.exists()) {
        const checkVoted = async () => {
          try {
            const uref = doc(db, "users", uid, "voted", pollTitle);
            const data = await getDoc(uref);
            let dat = data.data();
            if (dat.pollID == pollTitle) {
              beenVoted = true;
            }
          } catch (error) {
            console.log(error);
          }
        };
        await checkVoted();
        setPid(pollTitle);
        nav.navigate("Poll", beenVoted);
        alert("Joined poll " + pollTitle + " successfully");
      } else {
        alert("Could not find poll " + pollTitle);
      }
    };
    seePollExists();
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
      <TouchableOpacity style={styles.button} onPress={handleJoinPoll}>
        <Text style={styles.buttonText}>Join Poll</Text>
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
