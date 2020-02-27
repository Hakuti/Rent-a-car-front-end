import {SET_LOCATION} from '../../Constants/actiontypes';

export const setLocation = location => ({
    type: SET_LOCATION,
    payload: location
})

export default setLocation;