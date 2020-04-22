import {OPEN_LOCATION_MODAL} from '../../Constants/actiontypes';
// import {CLOSE__AVAILABILITY_MODAL} from '../../Constants/actiontypes';


export const openLocationModal = locationModal => ({
    type: OPEN_LOCATION_MODAL,
    payload: (locationModal)
})


export default openLocationModal;