import {SET_SEARCH_CALENDAR_DATE} from "../../Constants/actiontypes";
const initialState = {
  searchCalendar: false
};

const searchCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_CALENDAR_DATE:
      return {
        ...state,
        searchCalendar: action.payload
      };
    
    default:
      return state;
  }
};

export default searchCalendarReducer;
