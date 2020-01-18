import { SIGN_IN } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
