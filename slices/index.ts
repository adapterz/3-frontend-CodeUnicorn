import { combineReducers } from "redux";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
});

export type ReducerType = ReturnType<typeof auth>;
export default rootReducer;
