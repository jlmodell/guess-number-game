import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

import Colors from "../constants/colors";

const Start = props => {
  const [number, setNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selected, setSelected] = useState("");

  const handleChange = input => {
    setNumber(input.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    setNumber("");
    setConfirm(false);
  };

  const handleConfirm = () => {
    Alert.alert("Confirm", `You have chosen ${number}. Are you sure?`, [
      { text: "Yes", style: "destructive", onPress: submitConfirm },
      { text: "No", style: "destructive", onPress: handleReset }
    ]);
  };

  const submitConfirm = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number must be between (1 - 99)", [
        { text: "Okay", style: "destructive", onPress: handleReset }
      ]);
      return;
    }
    setConfirm(true);
    setSelected(chosenNumber);
    setNumber("");
  };

  let confirmOutput;

  if (confirm) {
    confirmOutput = (
      <View>
        <Card style={styles.confirmedNumber}>
          <NumberContainer>{selected}</NumberContainer>
        </Card>
        <Button style={styles.startGameButton} title='Start Game' />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.subtitle}>Enter a New Number</Text>
          <Input
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            maxLength={2}
            keyboardType='number-pad'
            style={styles.input}
            value={number}
            onChangeText={handleChange}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button
                title='Submit'
                color={Colors.primary}
                onPress={handleConfirm}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                onPress={handleReset}
                title='Reset'
                color={Colors.secondary}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: 50,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    width: "100%"
  },
  buttons: {
    width: 100
  },
  confirmedNumber: {
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  startGameButton: {
    marginTop: 25,
    width: "80%"
  }
});

export default Start;
