/**
 * The reducers cases for this page are for handling overflow on pages where things cannot be easily
 * locked with React-Locky, such as the RC-TimePicker which has an overflow problem
 * because the component is rendered outside the root dom as a portal.
 * 
 * The reducer states follow the below.
 * Usage goes as follows for these case and state:
 * CDE: Complicated Dom Element
 * Upon opening of CDE, change the height of the Div or Container
 * that is being affected by CDE.
 */
import {FIX_TIME_PICKER_TIME_MODAL_SCREEN_OVERFLOW} from '../../Constants/overflowActionTypes'
const initialState = {
    isTimeModalScreenFixed: (false)
  };
  
  const changeHeightForOverflowReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIX_TIME_PICKER_TIME_MODAL_SCREEN_OVERFLOW:
        return {
          ...state,
          currentWidth: action.payload
        };
      default:
        return state;
    }
  };
  
  export default changeHeightForOverflowReducer;
  