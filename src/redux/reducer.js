import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createAction, getType } from "typesafe-actions";
import authReducer from "../modules/auth/reducer/reducer";

export const clearStoreAfterLogout = createAction("clearStoreAfterLogout")();

const persistConfig = {
  storage,
  key: "root",
  transforms: [],
  blacklist: ["router", "intl"],
  whitelist: ["auth"],
};

function createRootReducer(history) {
  const rawRootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });

  return persistReducer(persistConfig, (state, action) => {
    if (state && action.type === getType(clearStoreAfterLogout)) {
      return rawRootReducer(undefined, action);
    }
    return rawRootReducer(state, action);
  });
}

export default createRootReducer;
