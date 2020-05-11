  
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import locationReducer from './locationReducer';
import hostVehicleReducer from './hostVehicleReducer';
import availabilityModalReducer from './availabilityModalReducer';
import currentWidth from './currentWidthReducer';
import oldWidth from './oldWidthReducer';
import priceModalReducer from './priceModalReducer';
import wizardModalReducer from './wizardModalReducer';
import searchCalendarReducer from './searchCalendarReducer';
import searchFiltersReducer from './searchFiltersReducer';
import searchLocationReducer from './searchLocationReducer';
import searchTimesReducer from './searchTimesReducer';
import searchTotalReducer from './searchlistReducer';
import locationModalReducer from './locationModalReducer';
import searchCalendarModalReducer from './searchCalendarModalReducer';
import filtersModalReducer from './filtersModalReducer';
import changeHeightForOverflowReducer from './changeHeightForOverflowReducer';

// import counterReducer from './counter'

const rootReducer = (history) => combineReducers({
  availabilityModal: availabilityModalReducer,
  priceModal: priceModalReducer,
  wizardModal: wizardModalReducer,
  count: locationReducer,
  vehicle: hostVehicleReducer,
  currentWidth: currentWidth,
  oldWidth: oldWidth,
  searchCalendar: searchCalendarReducer,
  searchFilters: searchFiltersReducer,
  searchTimes: searchTimesReducer,
  searchLocation: searchLocationReducer,
  searchTotal: searchTotalReducer,
  locationModal: locationModalReducer,
  filtersModal: filtersModalReducer,
  searchCalendarModal: searchCalendarModalReducer,
  changeHeightForOverflow: changeHeightForOverflowReducer,
  router: connectRouter(history)
})

export default rootReducer