import {SET_SEARCH_TOTAL} from '../../Constants/actiontypes';


export const searchTotal = total => ({
    type: SET_SEARCH_TOTAL,
    payload: (total)
})


export default searchTotal