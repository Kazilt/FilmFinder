import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export const Pconfirm = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const movies = [
    { id: "1", title: "Movie 1" },
    { id: "2", title: "Movie 2" },
    { id: "3", title: "Movie 3" },
    // Add more movies as needed
  ];
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

  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item.title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Selected Movies: </Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.datePickerContainer}>
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>
            {selectedDate ? selectedDate.toDateString() : "Select Date"}
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle confirm action here
          console.log("Selected Date:", selectedDate);
          nav.navigate("Poll");
        }}
      >
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
