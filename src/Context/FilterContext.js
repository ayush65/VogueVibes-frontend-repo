/** @format */

import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { filterReducer } from "../Reducer/FilterReducer";

const FilterContext = createContext(null);
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    product: [],
    price: 500,
    category: [],
    rating: 5,
    sort: null,
    arr: [],
    default: [],
  });
  useEffect(() => {
    (async () => {
      let response = await axios.get(
        "https://vogue-vibes-backend-repo.vercel.app/api/v1/products"
      );
      console.log(response.data);
      dispatch({
        type: "UPDATE_PRODUCTS",
        payload: { products: response.data },
      });
    })();
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
