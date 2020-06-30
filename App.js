import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const buttons = [
  ["LIMPAR", "VOLTAR"],
  [7, 8, 9, "/"],
  [4, 5, 6, "x"],
  [1, 2, 3, "-"],
  [0, ".", "=", "+"],
];

export default function App() {
  function handleOnPress() {}

  function renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return (
          <TouchableOpacity
            key={"btn" + buttonIndex}
            value={buttonItems}
            onPress={() => handleOnPress(buttonItems)}
            style={styles.numbersContainer}
          >
            <Text style={styles.numberText}>{buttonItems}</Text>
          </TouchableOpacity>
        );
      });

      return (
        <View key={"row" + index} style={styles.inputRow}>
          {rowItem}
        </View>
      );
    });

    return layouts;
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>0</Text>
      </View>

      <View style={styles.inputContainer}>{renderButtons()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 8,
    backgroundColor: "#7159c1",
  },
  result: {
    color: "#000",
    fontSize: 80,
    fontWeight: "bold",
    padding: 20,
    textAlign: "right",
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
  },

  numbersContainer: {
    flex: 1,
    margin: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "#fff",
    fontSize: 26,
  },
});
