import {SET_SEARCH_FILTERS} from '../../Constants/actiontypes';


export const searchFilters = searchFilters => ({
    type: SET_SEARCH_FILTERS,
    payload: (searchFilters)
})


export default searchFilters