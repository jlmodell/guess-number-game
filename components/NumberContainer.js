import React from "react";
import { Text, StyleSheet, View } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    padding: 15,
    borderColor: Colors.secondary,
    borderWidth: 3,
    borderRadius: 10
  },
  text: {
    fontSize: 35,
    fontWeight: "700",
    color: Colors.primary
  }
});

export default NumberContainer;
