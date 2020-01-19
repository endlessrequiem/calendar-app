import { LOG_IN, UPDATE_USER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      
      };

    
      
    default:
      return state;
  }
};
