import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Add New Flashcard</Text>
        <TextInput style={styles.input} placeholder="Enter Question" />
        <TextInput style={styles.input} placeholder="Enter Answer" />
        <Button style={styles.submitcolor} title="Save" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: "60%",
    padding: 20,
    backgroundColor: "#E2E0BA",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  submitcolor: {
    backgroundColor: "#ADD8E5",
  },
});
