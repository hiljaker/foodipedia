import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";

const rootPersistConfig = {
  key: "root",
  keyPrefix: "redux-",
  storage,
};

const authPersistConfig = {
  key: "auth",
  keyPrefix: "redux-",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export type IRootState = ReturnType<typeof rootReducer>;

export { rootPersistConfig, rootReducer };
