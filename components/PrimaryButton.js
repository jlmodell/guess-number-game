import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const PrimaryButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = new StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans-bold"
  }
});

export default PrimaryButton;
