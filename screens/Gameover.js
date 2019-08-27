import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

const Gameover = props => {
  const { numOfRounds, usersChoice, newGame } = props;

  return (
    <ImageBackground
      source={require("../assets/success.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.padding}>
          <TitleText style={styles.title}>Game Over!</TitleText>
        </View>
        <NumberContainer style={styles.rounds}>{usersChoice}</NumberContainer>
        <View style={styles.padding}>
          <TitleText style={{ color: "white", fontSize: 15 }}>
            It took {numOfRounds} {numOfRounds === 1 ? "round" : "rounds"} to
            guess my number!
          </TitleText>
        </View>
        <Card style={styles.buttonContainer}>
          <Button color={Colors.primary} title='New Game' onPress={newGame} />
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = new StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 20,
    color: "white"
  },
  padding: {
    marginVertical: 15
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    maxWidth: "80%",
    width: 300
  },
  rounds: { marginTop: 20, width: 300, maxWidth: "80%", alignItems: "center" }
});

export default Gameover;
