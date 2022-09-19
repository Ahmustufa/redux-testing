import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer) // rootReducer has the state of the application

export default store