//root reducer

import changeNum from "./counter";

import { combineReducers } from "redux"; // combines all reducers mentioned in counter.js but we only have one fuction or reducer


const rootReducer = combineReducers({
    changeNum
})

export default rootReducer