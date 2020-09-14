import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ query, onQueryChange, onQuerySubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='Search'
        autoCorrect={false}
        autoCapitalize='none'
        value={query}
        onChangeText={onQueryChange}
        onEndEditing={onQuerySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
