/**
 * The actions for this page are for handling overflow on pages where things cannot be easily
 * locked with React-Locky, such as the RC-TimePicker which has an overflow problem
 * because the component is rendered outside the root dom as a portal.
 * 
 * Usage goes as follows for these actions:
 * CDE: Complicated Dom Element
 * Upon opening of CDE, change the height of the Div or Container
 * that is being affected by CDE.
 */

import {FIX_TIME_PICKER_TIME_MODAL_SCREEN_OVERFLOW} from '../../Constants/overflowActionTypes';


export const fixTimeModalScreenOverFlow = isFixed => ({
    type: FIX_TIME_PICKER_TIME_MODAL_SCREEN_OVERFLOW,
    payload: (isFixed)
})



export default fixTimeModalScreenOverFlow;