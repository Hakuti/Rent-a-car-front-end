import {SET_SEARCH_TIMES} from '../../Constants/actiontypes';


export const searchTimes = searchTimes => ({
    type: SET_SEARCH_TIMES,
    payload: (searchTimes)
})


export default searchTimes;