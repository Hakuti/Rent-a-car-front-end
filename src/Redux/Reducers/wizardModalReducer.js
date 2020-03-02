import { createStore } from "redux";

const initialState = {
  openWizardModal: false
};

const wizardModalReducer = (state = initialState, action) => {

  switch (action.type) {
    case "OPEN_WIZARD_MODAL":
      return {
        ...state,
        openWizardModal: action.payload
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

export default wizardModalReducer;
