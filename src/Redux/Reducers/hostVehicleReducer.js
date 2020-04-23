
const initialState = {
    vehicle: 1
}

const vehicleReducer = (state = initialState, action ) => {
    switch(action.type)
    {
        case 'SET_VEHICLE':
            return {
                ...state,
                vehicle: action.payload
            }
        default:
                return state;
    }
}

export default vehicleReducer