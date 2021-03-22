import { createAction, getType } from "typesafe-actions";

export const login = createAction("clearStoreAfterLogout")((auth) => ({
  auth,
}));

export const actionAAA = createAction("clearStoreAfterLogout")((message) => ({
  message,
}));

const authReducer = (
  state = {
    ahihi: "con cho",
    thang_sinh: "oc cho",
  },
  action
) => {
  switch (action.type) {
    case getType(login):
      // below action type is narrowed to: { type: "todos/ADD"; payload: Todo; }
      return { ...state, ...action.payload };
    case getType(actionAAA):
      // below action type is narrowed to: { type: "todos/ADD"; payload: Todo; }
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
