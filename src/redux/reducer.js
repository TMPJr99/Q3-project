import { NEW_RESERVATION, UPDATE_RESERVATION, FETCH_RESERVATION, DELETE_RESERVATION } from './actions'

let initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_RESERVATION:
            return state;
        case UPDATE_RESERVATION:
            return state;
        case FETCH_RESERVATION:
            return action.payload;
        case DELETE_RESERVATION:
            return state;
        default:
            return state;
    }
}