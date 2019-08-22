import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import Input from "./screens/Input";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess My Number v0.0.1' />
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
