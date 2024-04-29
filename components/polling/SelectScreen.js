import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";

export default function SelectScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreatePress = () => {
    // Close the modal
    setModalVisible(false);
    // Navigate to create screen
    navigation.navigate("Pname");
  };

  const handleJoinPress = () => {
    // Close the modal
    setModalVisible(false);
    // Navigate to join screen
    navigation.navigate("Jname");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCreatePress}>
              <Text style={styles.buttonText}>Create Poll</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleJoinPress}>
              <Text style={styles.buttonText}>Join Poll</Text>
       </TouchableOpacity>
      <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>How To</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modallytext}> How to join a poll:  </Text>
            <Text> 1: Have the id of the poll that you want to join</Text>
            <Text> 2: Click join poll and enter the poll's id </Text>
            <Text> 3: You joined! Have fun voting! </Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  button: {
    backgroundColor: "#e6aa68",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 75,
    alignItems: "center",
  },
  modalButton: {
    backgroundColor: "#e6aa68",
    padding: 5,
    borderRadius: 20,
    position: "absolute",
    bottom: 20, // Adjust bottom positioning
    right: 20, // Adjust right positioning
    width: 75
  },
  closeButton: {
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 20,
    width: 100,
    bottom: -200, // Adjust bottom positioning
    alignItems: "center",
  },
  modallytext:{
    fontSize: 18,
    fontWeight: "bold",

  },
});
