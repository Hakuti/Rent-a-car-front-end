  
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import locationReducer from './locationReducer';
import hostVehicleReducer from './hostVehicleReducer';
import availabilityModalReducer from './availabilityModalReducer';
import currentWidth from './currentWidthReducer';
import oldWidth from './oldWidthReducer';
import priceModalReducer from './priceModalReducer';
// import counterReducer from './counter'

const rootReducer = (history) => combineReducers({
  availabilityModal: availabilityModalReducer,
  priceModal: priceModalReducer,
  count: locationReducer,
  vehicle: hostVehicleReducer,
  currentWidth: currentWidth,
  oldWidth: oldWidth,
  router: connectRouter(history)
})

export default rootReducer