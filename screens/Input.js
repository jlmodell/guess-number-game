import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

import Card from "../components/Card";

const Input = props => {
  const [number, setNumber] = useState(null);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.subtitle}>Enter a New Number</Text>
        <View style={styles.input}>
          <TextInput
            placeholder='#'
            value={number}
            onChange={input => setNumber(input)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Confirm' onPress={() => console.log("testing")} />
          <Button title='Reset' color='red' />
        </View>
      </Card>
    </View>
  );
};

const styles = new StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10
  },
  subtitle: {
    marginVertical: 20,
    fontWeight: "500"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    width: "100%"
  }
});

export default Input;
