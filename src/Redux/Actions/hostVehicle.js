import {SET_VEHICLE} from '../../Constants/actiontypes';

export const setVehicle = vehicle => ({
    type: SET_VEHICLE,
    payload: vehicle + 1
})

export default setVehicle;