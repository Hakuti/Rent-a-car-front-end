import {OPEN_SEARCH_TIME_MODAL, SET_SEARCH_TIMES} from '../../Constants/actiontypes';

export const searchTimes = searchTimes => ({
    type: SET_SEARCH_TIMES,
    payload: (searchTimes)
})


export const searchTimesModalOpen = isOpen => ({
    type: OPEN_SEARCH_TIME_MODAL,
    payload: (isOpen)
})


export default searchTimes;