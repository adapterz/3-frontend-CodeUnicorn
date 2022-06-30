import { combineReducers } from "redux";
import auth from "./auth";
import toast from "./toast";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 로컬 스토리지

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
  toast,
});

export type AuthReducerType = ReturnType<typeof auth>;
export type ToastReducerType = ReturnType<typeof toast>;
export default persistReducer(persistConfig, rootReducer);
