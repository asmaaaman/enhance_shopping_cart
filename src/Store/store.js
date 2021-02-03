import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

//import reducer
import combineReducers from "./reducers/reducerIndex";
//import watchSagas
import { watchSagas } from "./sagas/root";

// create the saga middleware
const saga = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(combineReducers, enhancer);
// then run the saga
saga.run(watchSagas);

export default store;
