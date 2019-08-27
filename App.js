import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import Start from "./screens/Start";
import Guess from "./screens/Guess";
import Gameover from "./screens/Gameover";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [number, setNumber] = useState("");
  const [rounds, setRounds] = useState("");
  const [data, loadData] = useState(false);

  if (!data) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => loadData(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGame = number => {
    setNumber(number);
  };

  const endGame = numRounds => {
    setRounds(numRounds);
  };

  const newGame = () => {
    setRounds(0);
    setNumber("");
  };

  let content = <Start onStart={startGame} />;

  if (number && rounds <= 0) {
    content = <Guess usersChoice={number} onGameOver={endGame} />;
  } else if (rounds > 0) {
    content = (
      <Gameover numOfRounds={rounds} usersChoice={number} newGame={newGame} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess My Number v1.0.0' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
