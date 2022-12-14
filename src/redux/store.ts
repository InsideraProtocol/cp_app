import { createStore, applyMiddleware, Middleware, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import config from "../config";
import appReducer from "./reducer";
import saga from "./saga";

export const reducerInitiator = (state, action) => {
  return () => appReducer(state, action);
};

const persistConfig = {
  key: "InsiderProtocol",
  storage: AsyncStorage,
  whitelist: ["clientAuth", "language", "theme"],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const sagaMiddleware = createSagaMiddleware();
const middlewares: Array<Middleware> = [sagaMiddleware];
if (config.reduxLogger) {
  middlewares.push(logger);
}

export const storeGenerator = (reducer) => {
  const store = createStore(reducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  sagaMiddleware.run(saga, store as TStoreRedux);

  return {
    store,
    persistor,
  };
};

const { store, persistor } = storeGenerator(persistedReducer);

export type TReduxState = ReturnType<typeof appReducer>;
export type TAppDispatch = typeof store.dispatch;
export type TStoreRedux = Store<TReduxState>;

export { store, persistor };
