import { NEW_RESERVATION, UPDATE_RESERVATION, FETCH_RESERVATION } from './actions'

let initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_RESERVATION:
            return state;
        case UPDATE_RESERVATION:
            return state;
        case FETCH_RESERVATION:
            return action.payload;
        default:
            return state;
    }
}