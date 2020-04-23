
const initialState = {
  openPriceModal: false
};

const priceModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_PRICE_MODAL":
      return {
        ...state,
        openPriceModal: action.payload
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

export default priceModalReducer;
