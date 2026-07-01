import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./models/auth/reducer";

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
