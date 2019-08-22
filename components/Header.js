import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  header: {
    paddingTop: 36,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    backgroundColor: "teal"
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "900"
  }
});

export default Header;
