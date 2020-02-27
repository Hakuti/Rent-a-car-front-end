import { createStore } from "redux";

const initialState = {
  oldWidth: null
};

const oldWidthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OLD_WIDTH":
      return {
        ...state,
        oldWidth: action.payload
      };
    default:
      return state;
  }
};

export default oldWidthReducer;
