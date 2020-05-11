import {
  SET_SEARCH_TIMES,
  OPEN_SEARCH_TIME_MODAL,
} from "../../Constants/actiontypes";
const initialState = {
  searchTimes: false,
  searchTimeModalOpen: false
};

const searchTimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TIMES:
      return {
        ...state,
        searchTimes: action.payload,
      };
    case OPEN_SEARCH_TIME_MODAL:
      return {
        ...state,
        searchTimeModalOpen: action.payload
      };
    default:
      return state;
  }
};

export default searchTimesReducer;
