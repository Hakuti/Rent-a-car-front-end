import {SET_SEARCH_CALENDAR_DATE} from "../../Constants/actiontypes";
import {SET_SEARCH_CALENDAR_DATE_START_DATE} from "../../Constants/actiontypes";
import {SET_SEARCH_CALENDAR_DATE_END_DATE} from "../../Constants/actiontypes";
import {SET_SEARCH_CALENDAR_DATE_START_FOCUS} from "../../Constants/actiontypes";
import {SET_SEARCH_CALENDAR_DATE_END_FOCUS} from "../../Constants/actiontypes";


import moment from "moment";

const initialState = {
  searchCalendar: false,
  searchCalendarStartDate: moment(),
  searchCalendarEndDate: moment().add(5, 'days'),
  searchCalendarStartFocus: null,
  searchCalendarEndFocus: null
};

const searchCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_CALENDAR_DATE:
      return {
        ...state,
        searchCalendar: action.payload
      };
    case SET_SEARCH_CALENDAR_DATE_START_DATE: 
      return {
        ...state,
        searchCalendarStartDate: action.payload
      }
    case SET_SEARCH_CALENDAR_DATE_END_DATE:
      return {
        ...state,
        searchCalendarEndDate: action.payload
      }
      case SET_SEARCH_CALENDAR_DATE_START_FOCUS:
        return {
          ...state,
          searchCalendarStartFocus: action.payload
        }
        case SET_SEARCH_CALENDAR_DATE_END_FOCUS:
        return {
          ...state,
          searchCalendarEndFocus: action.payload
        }
    default:
      return state;
  }
};

export default searchCalendarReducer;
