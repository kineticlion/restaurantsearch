import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
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

  return [searchApi, restaurants, errorMessage];
};
