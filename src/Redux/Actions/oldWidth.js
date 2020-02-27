import {SET_OLD_WIDTH} from '../../Constants/actiontypes';
// import {CLOSE__AVAILABILITY_MODAL} from '../../Constants/actiontypes';


export const setOldWidth = oldWidth => ({
    type: SET_OLD_WIDTH,
    payload: (oldWidth)
})

export default setOldWidth;