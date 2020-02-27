import {OPEN_AVAILABILITY_MODAL} from '../../Constants/actiontypes';
// import {CLOSE__AVAILABILITY_MODAL} from '../../Constants/actiontypes';


export const openModal = availabilityModal => ({
    type: OPEN_AVAILABILITY_MODAL,
    payload: (availabilityModal)
})


export default openModal;