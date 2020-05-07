import {OPEN_SEARCH_CALENDAR_MODAL} from "../../Constants/actiontypes";

const initialState = {
    openSearchCalendarModal: false
  };
  
  const searchCalendarModalReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_SEARCH_CALENDAR_MODAL:
        return {
          ...state,
          openSearchCalendarModal: action.payload
        };
      default:
        return state;
    }
  };
  
  export default searchCalendarModalReducer;
  