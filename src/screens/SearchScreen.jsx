import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchQuery) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          location: "Atlanta, GA, United States",
          term: searchQuery,
          limit: 50,
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Oops, Something went wrong..");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

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
