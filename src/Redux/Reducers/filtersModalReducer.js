import { OPEN_FILTERS_DESKTOP_MODAL } from "../../Constants/actiontypes";
import { OPEN_FILTERS_MOBILE_MODAL } from "../../Constants/actiontypes";

const initialState = {
  openFilterDesktopModal: false,
  openFilterMobileModal: false,
};

const filtersModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILTERS_DESKTOP_MODAL:
      return {
        ...state,
        openFilterDesktopModal: action.payload,
      };
    case OPEN_FILTERS_MOBILE_MODAL:
      return {
        ...state,
        openFilterMobileModal: action.payload,
      };
    default:
      return state;
  }
};

export default filtersModalReducer;
