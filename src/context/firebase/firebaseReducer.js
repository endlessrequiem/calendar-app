import { LOG_IN, UPDATE_USER, CURRENT_USER_ID, CURRENT_EVENT_ID } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      
      };

      case CURRENT_USER_ID:
        return {
          ...state,
          currentUserId: action.payload,
          loading: false
        };
        case CURRENT_EVENT_ID: 
          return {
            ...state, 
            currentEventId: action.payload,
            loading: false
          };
    
      
    default:
      return state;
  }
};
