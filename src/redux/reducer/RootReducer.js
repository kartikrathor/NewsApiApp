import { combineReducers } from "redux";
import NewsReducer from "./NewsReducer";

const combinedReducer = combineReducers({
  news: NewsReducer,
});

const RootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default RootReducer;
