import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Add() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSave = () => {
    if (!question.trim() || !answer.trim()) {
      setSuccessMessage("Both fields are required!");
      return;
    }
    setSuccessMessage("Flashcard saved!");
    setQuestion("");
    setAnswer("");

    // Clear the success message after a few seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Add New Flashcard</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Question"
          value={question}
          onChangeText={setQuestion}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Answer"
          value={answer}
          onChangeText={setAnswer}
        />
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  box: {
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
  button: {
    backgroundColor: "#ADD8E5",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
  successMessage: {
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
