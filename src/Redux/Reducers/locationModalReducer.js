import {OPEN_LOCATION_MODAL} from '../../Constants/actiontypes';


const initialState = {
  openLocationModal: false
};

const locationModalReducer = (state = initialState, action) => {

  switch (action.type) {
    case OPEN_LOCATION_MODAL:
      return {
        ...state,
        openLocationModal: action.payload
      };
    // case "CLOSE_AVAILABILITY_MODAL":
    //   return {
    //     ...state,
    //     closeModal: action.payload
    //   };
    default:
      return state;
  }
};

export default locationModalReducer;
