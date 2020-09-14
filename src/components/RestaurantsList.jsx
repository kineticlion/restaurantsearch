import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import RestaurantDetail from "./RestaurantDetail";

const RestaurantsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestaurantDetail data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        maxToRenderPerBatch={5}
      />
      <View style={{ marginBottom: 5 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default RestaurantsList;
