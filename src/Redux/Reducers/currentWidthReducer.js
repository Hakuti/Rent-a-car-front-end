import { createStore } from "redux";

const initialState = {
  currentWidth: null
};

const currentWidthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_WIDTH":
      return {
        ...state,
        currentWidth: action.payload
      };
    default:
      return state;
  }
};

export default currentWidthReducer;
