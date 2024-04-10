import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Default() {
  return (
    <View style={styles.container}>
      <Text>This is default</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
=======
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
>>>>>>> dbe6f39a9a567d6517404ecd17649fd3d7d81807
