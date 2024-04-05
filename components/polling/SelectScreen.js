import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function SelectScreen({ navigation }) {
  const handleCreatePress = () => {
    // Navigate to create screen
    navigation.navigate("Pname");
  };

  const handleJoinPress = () => {
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
  button: {
    backgroundColor: "#007bff",
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
});
