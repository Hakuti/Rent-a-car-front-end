import {SET_SEARCH_TOTAL} from "../../Constants/actiontypes";
const initialState = {
  searchTotal: (0)
};

const searchTotalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TOTAL:
      return {
        ...state,
        searchTotal: action.payload
      };
    
    default:
      return state;
  }
};

export default searchTotalReducer;
