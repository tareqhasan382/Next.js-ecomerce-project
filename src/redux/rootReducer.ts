import { baseApi } from "./api/baseApi";
import filterSlice from "./api/filterSlice";
import authSlice from "./authSlice";
import cardReducer from "./cardSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  filter: filterSlice,
  cart: cardReducer,
  auth: authSlice,
  // cart: cardReducer,
};
