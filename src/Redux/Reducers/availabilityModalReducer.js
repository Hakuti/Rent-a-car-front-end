import { createStore } from "redux";

const initialState = {
  openModal: false
};

const availabilityModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_AVAILABILITY_MODAL":
      return {
        ...state,
        openModal: action.payload
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

export default availabilityModalReducer;