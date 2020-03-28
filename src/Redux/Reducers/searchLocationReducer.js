import {SET_SEARCH_LOCATION} from "../../Constants/actiontypes";
const initialState = {
  searchLocation: false
};

const searchLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_LOCATION:
      return {
        ...state,
        searchLocation: action.payload
      };
    
    default:
      return state;
  }
};

export default searchLocationReducer;
