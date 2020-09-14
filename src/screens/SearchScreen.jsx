import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onQuerySubmit={() => searchApi(query)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {restaurants.length > 0 ? (
        <Text>We have found {restaurants.length} Results.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
