import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer O3Yb9XFFlzjuhbeJ6I9d0OpKHHolqMUDHU4PpVRa7aJgHi0tOnvcAvuGAYUlZ_ug8temNY6vBtu8ew8TFgAzR66nUDMpff-1ZFNWI3nZp9jErDsQJN0B2ZKQyhpfX3Yx",
  },
});
