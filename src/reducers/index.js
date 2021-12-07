import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Login from "./Login";
import Todos from "./Todos";
import User from "./User";
import Dashboard from "./Dashboard";

const reducers = combineReducers({ Login, Todos, User, Dashboard });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();