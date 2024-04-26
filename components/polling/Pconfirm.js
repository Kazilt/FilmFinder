import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AppContext, PollsContext } from "../../AppContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
export const Pconfirm = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const pContext = useContext(PollsContext);
  const titles = pContext.selectedMovs[0];
  const [selectedDate, setSelectedDate] = pContext.date;
  const appContext = useContext(AppContext);
  const db = appContext.db;

  // Add more movies as needed

  nav = useNavigation();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const handleCreate = () => {
    const pollID = pContext.cPoll[0];
    if (!selectedDate) {
      alert("You must select a date");
      return;
    }
    const date = selectedDate.toDateString();
    const handleC = async () => {
      try {
        // Check if poll ID already exists
        const pRef = doc(db, "polls", pollID);
        const pSnapshot = await getDoc(pRef);
        if (pSnapshot.exists()) {
          alert("Poll ID already exists. Please choose a different ID.");
          return;
        }
        const ini_movs = Object.keys(pContext.selectedMovs[0]).map(
          (mov, key) => {
            return { id: key, choice: mov, votes: 0 };
          }
        );
        await setDoc(pRef, { date: date, votes: ini_movs, total: 0 });
        pContext.pollId[1](pollID);
        nav.navigate("Poll", false);
        alert("Poll made successfully.");
      } catch (error) {
        alert("Error signing up:", error);
      }
    };
    handleC();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Selected Movies: </Text>
      <ScrollView>
        {Object.keys(titles).map((mov, i) => {
          return (
            <Text style={styles.item} key={i}>
              {mov}
            </Text>
          );
        })}
      </ScrollView>
      <View style={styles.datePickerContainer}>
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>
            {selectedDate ? selectedDate.toDateString() : "Select Date"}
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          minimumDate={new Date()}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#3D5A6C",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  selectedItem: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  datePickerContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    marginBottom: 20,
  },
});
