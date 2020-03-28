import {SET_SEARCH_LOCATION} from '../../Constants/actiontypes';


export const searchLocation = searchLocation => ({
    type: SET_SEARCH_LOCATION,
    payload: (searchLocation)
})


export default searchLocation;