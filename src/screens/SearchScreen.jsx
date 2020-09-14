import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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
    <View>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onQuerySubmit={() => searchApi(query)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {restaurants.length > 0 ? (
        <View style={{ margin: 20 }}>
          <Text>We have found {restaurants.length} Results.</Text>
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
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
