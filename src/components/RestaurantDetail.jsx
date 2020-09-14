import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const RestaurantDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <Text style={styles.name}>{data.name}</Text>
      <Text>
        {data.rating} Stars, {data.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  container: {
    marginLeft: 15,
  },
});

export default RestaurantDetail;
