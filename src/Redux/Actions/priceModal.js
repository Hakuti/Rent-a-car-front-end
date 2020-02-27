import {OPEN_PRICE_MODAL} from '../../Constants/actiontypes';
// import {CLOSE__AVAILABILITY_MODAL} from '../../Constants/actiontypes';


export const openPriceModal = priceModal => ({
    type: OPEN_PRICE_MODAL,
    payload: (priceModal)
})


export default openPriceModal;