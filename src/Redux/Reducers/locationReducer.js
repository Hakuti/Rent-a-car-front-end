import { createStore } from 'redux';

const initialState = {
    location: {}
}

const locationReducer = (state = initialState, action ) => {
    switch(action.type)
    {
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload
            }
        default:
                return state;
    }
}

export default createStore(locationReducer)