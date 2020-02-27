import {SET_CURRENT_WIDTH} from '../../Constants/actiontypes';
// import {CLOSE__AVAILABILITY_MODAL} from '../../Constants/actiontypes';


export const setCurrentWidth = currentWidth => ({
    type: SET_CURRENT_WIDTH,
    payload: (currentWidth)
})

export default setCurrentWidth;