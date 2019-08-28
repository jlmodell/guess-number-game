import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image
} from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../constants/colors";

const Gameover = props => {
  const { numOfRounds, usersChoice, newGame } = props;

  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Game Over!</TitleText>
      <Card style={styles.container}>
        <NumberContainer style={styles.rounds}>{usersChoice}</NumberContainer>
      </Card>
      <Card style={styles.container}>
        <View style={styles.padding}>
          <BodyText style={styles.content}>
            It took {numOfRounds} {numOfRounds === 1 ? "round" : "rounds"} to
            guess my number!
          </BodyText>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
            resizeMode='cover'
          />
        </View>
        <PrimaryButton onPress={newGame}>New Game</PrimaryButton>
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
  container: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  imageContainer: {
    marginVertical: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white"
  },
  content: {
    color: "black"
  },
  padding: {
    marginVertical: 15
  },
  rounds: { marginTop: 20, width: 300, maxWidth: "80%", alignItems: "center" }
});

export default Gameover;
