import { createStore } from "redux";
import {SET_SEARCH_TIMES} from "../../Constants/actiontypes";
const initialState = {
  searchTimes: false
};

const searchTimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TIMES:
      return {
        ...state,
        searchTimes: action.payload
      };
    
    default:
      return state;
  }
};

export default searchTimesReducer;
