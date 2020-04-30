import {OPEN_FILTERS_DESKTOP_MODAL} from '../../Constants/actiontypes';
import {OPEN_FILTERS_MOBILE_MODAL} from '../../Constants/actiontypes';



export const openFiltersDesktopModal = filtersModal => ({
    type: OPEN_FILTERS_DESKTOP_MODAL,
    payload: (filtersModal)
})

export const openFiltersMobileModal = filtersModal => ({
    type: OPEN_FILTERS_MOBILE_MODAL,
    payload: (filtersModal)
})

export default openFiltersDesktopModal;