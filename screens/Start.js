import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

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
    Keyboard.dismiss();
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
    Keyboard.dismiss();
  };

  let confirmOutput;

  if (confirm) {
    confirmOutput = (
      <View>
        <Card style={styles.confirmedNumber}>
          <NumberContainer>{selected}</NumberContainer>
        </Card>
        <Button
          style={styles.startGameButton}
          title='Start Game'
          onPress={() => props.onStart(selected)}
          color='white'
        />
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
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.subtitle}>Enter a New Number</BodyText>
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
    alignItems: "center",
    backgroundColor: Colors.bg
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white"
  },
  subtitle: {
    marginVertical: 20,
    fontSize: 18
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
