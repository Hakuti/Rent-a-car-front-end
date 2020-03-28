import {SET_SEARCH_FILTERS} from "../../Constants/actiontypes";
const initialState = {
  searchFilters: false
};

const searchFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_FILTERS:
      return {
        ...state,
        searchFilters: action.payload
      };
    
    default:
      return state;
  }
};

export default searchFiltersReducer;
