import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const Guess = props => {
  const { usersChoice, onGameOver } = props;

  const [guess, setGuess] = useState(
    generateRandomBetween(1, 100, usersChoice)
  );
  const [rounds, setRounds] = useState(0);
  const Low = useRef(1);
  const High = useRef(100);

  useEffect(() => {
    if (guess === usersChoice) {
      onGameOver(rounds);
    }
  }, [guess, usersChoice, onGameOver]);

  const nextGuessHandler = type => {
    if (
      (type === "Higher" && guess > usersChoice) ||
      (type === "Lower" && guess < usersChoice)
    ) {
      Alert.alert("", `You have chosen ${usersChoice}. No Cheating!`, [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }

    if (type === "Lower") {
      High.current = guess;
    } else {
      Low.current = guess;
    }

    const nextGuess = generateRandomBetween(Low.current, High.current, guess);

    setGuess(nextGuess);
    setRounds(prevState => (prevState += 1));
  };

  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Guess</TitleText>
      <Card style={styles.guess}>
        <NumberContainer>{guess}</NumberContainer>
      </Card>
      <Card style={styles.buttonContainer}>
        <Button
          color={Colors.primary}
          title='Higher'
          onPress={() => nextGuessHandler("Higher")}
        />
        <Button
          color={Colors.secondary}
          title='Lower'
          onPress={() => nextGuessHandler("Lower")}
        />
      </Card>
    </View>
  );
};

const styles = new StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.bg
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    maxWidth: "80%",
    width: 300
  },
  guess: {
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  }
});

export default Guess;
