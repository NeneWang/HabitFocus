import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function TaggedButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={[styles.algorithms, {color: props.textColor || styles.algorithms.color}]}>{props.text || 'Algorithms'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 9,
    shadowColor: "rgba(255,6,6,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.17,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  algorithms: {
    color: "rgba(255,0,0,1)",
    fontSize: 14,
    textAlign: "left"
  }
});

export default TaggedButton;