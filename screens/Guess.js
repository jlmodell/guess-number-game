import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import PrimaryButton from "../components/PrimaryButton";

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

const renderListItem = (listLength, itemData) => (
  <Card style={styles.guesses}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </Card>
);

const Guess = props => {
  const { usersChoice, onGameOver } = props;
  const initialGuess = generateRandomBetween(1, 100, usersChoice);
  const [guess, setGuess] = useState(initialGuess);
  const [guessList, addGuessToList] = useState([initialGuess.toString()]);
  const Low = useRef(1);
  const High = useRef(100);

  useEffect(() => {
    if (guess === usersChoice) {
      onGameOver(guessList.length);
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
      Low.current = guess + 1;
    }

    const nextGuess = generateRandomBetween(Low.current, High.current, guess);

    setGuess(nextGuess);
    addGuessToList(prevState => [nextGuess.toString(), ...prevState]);
  };

  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Guess</TitleText>
      <Card style={styles.guess}>
        <PrimaryButton
          style={{ backgroundColor: Colors.primary }}
          onPress={() => nextGuessHandler("Higher")}
        >
          <FontAwesome name='hand-o-up' size={24} />
        </PrimaryButton>

        <NumberContainer>{guess}</NumberContainer>

        <PrimaryButton
          style={{ backgroundColor: Colors.secondary }}
          onPress={() => nextGuessHandler("Lower")}
        >
          <FontAwesome name='hand-o-down' size={24} />
        </PrimaryButton>
      </Card>
      <View style={styles.guessesList}>
        {/* <ScrollView>
          {guessList.map((guess, index) =>
            renderListItem(guess, guessList.length - index)
          )}
        </ScrollView> */}
        <FlatList
          data={guessList}
          keyExtractor={item => item}
          renderItem={renderListItem.bind(this, guessList.length)}
        />
      </View>
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  guessesList: {
    width: "75%",
    flex: 1
  },
  guesses: {
    padding: 10,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default Guess;
