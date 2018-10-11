import { NEW_RESERVATION } from './actions'

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_RESERVATION:
            return state;
        default:
            return state;
    }
}