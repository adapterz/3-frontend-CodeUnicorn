import { combineReducers } from "redux";
import auth from "./auth";
import toast from "./toast";

const rootReducer = combineReducers({
  auth,
  toast,
});

export type AuthReducerType = ReturnType<typeof auth>;
export type ToastReducerType = ReturnType<typeof toast>;
export default rootReducer;
