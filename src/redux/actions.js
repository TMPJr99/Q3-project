import axios from 'axios';

export const NEW_RESERVATION = "NEW_RESERVATION";

export const newReservation = (new_time_slot) => {
    return dispatch => {
        axios.post('http://localhost:8000/time_slots/new', new_time_slot)
            .then(()=> dispatch({
                type: NEW_RESERVATION
            }))
    }
}