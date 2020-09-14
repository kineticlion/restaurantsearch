import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterByPriceLevel = (priceLevel) => {
    // Price Levels for yelp $ = 1, $$ = 2, $$$ = 3
    return restaurants.filter((restaurant) =>
      restaurant.price ? restaurant.price.length === priceLevel : false
    );
  };

  return (
    <>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onQuerySubmit={() => searchApi(query)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {restaurants.length > 0 ? (
        <>
          <Text style={{ marginLeft: 15, marginVertical: 5 }}>
            We have found {restaurants.length} Results.
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <RestaurantsList
              results={filterByPriceLevel(1)}
              title='Cost Effecive'
            />
            <RestaurantsList
              results={filterByPriceLevel(2)}
              title='Bit Pricier'
            />
            <RestaurantsList
              results={[...filterByPriceLevel(3), ...filterByPriceLevel(4)]}
              title='Big Spender'
            />
          </ScrollView>
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
