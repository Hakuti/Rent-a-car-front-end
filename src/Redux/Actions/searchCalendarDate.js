import {SET_SEARCH_CALENDAR_DATE} from '../../Constants/actiontypes';
import {SET_SEARCH_CALENDAR_DATE_START_DATE} from '../../Constants/actiontypes';
import {SET_SEARCH_CALENDAR_DATE_END_DATE} from '../../Constants/actiontypes';
import {SET_SEARCH_CALENDAR_DATE_START_FOCUS} from '../../Constants/actiontypes';
import {SET_SEARCH_CALENDAR_DATE_END_FOCUS} from '../../Constants/actiontypes';



export const searchCalendarDate = searchCalendarDate => ({
    type: SET_SEARCH_CALENDAR_DATE,
    payload: (searchCalendarDate)
})

export const searchCalendarStartDate = searchCalendarStartDate => ({
    type: SET_SEARCH_CALENDAR_DATE_START_DATE,
    payload: (searchCalendarStartDate)
})

export const searchCalendarEndDate = searchCalendarEndDate => ({
    type: SET_SEARCH_CALENDAR_DATE_END_DATE,
    payload: (searchCalendarEndDate)
})

export const searchCalendarStartFocus = searchCalendarStartFocus => ({
    type: SET_SEARCH_CALENDAR_DATE_START_FOCUS,
    payload: (searchCalendarStartFocus)
})

export const searchCalendarEndFocus = searchCalendarEndFocus => ({
    type: SET_SEARCH_CALENDAR_DATE_END_FOCUS,
    payload: (searchCalendarEndFocus)
})
export default searchCalendarDate;