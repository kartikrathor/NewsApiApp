/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import RootReducer from "../reducer/RootReducer";

const persistConfig = {
  key: "@prcStore-7",
  storage: ExpoFileSystemStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user"],
};

const pReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(
  pReducer,
  __DEV__
    ? composeWithDevTools(applyMiddleware(ReduxThunk))
    : applyMiddleware(ReduxThunk)
);
const persistor = persistStore(store);
export { persistor };
export default store;
