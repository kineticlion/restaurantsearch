import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const RestaurantsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <View style={{ marginBottom: 5 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestaurantsList;
