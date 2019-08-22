import React from "react";
import { StyleSheet, View } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = new StyleSheet.create({
  card: {
    marginVertical: 10,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20
  }
});

export default Card;
