import axios from 'axios';

export const NEW_RESERVATION = "NEW_RESERVATION";
export const UPDATE_RESERVATION = "UPDATE_RESERVATION";
export const FETCH_RESERVATION = "FETCH_RESERVATION";
export const DELETE_RESERVATION = "DELETE_RESERVATION";

export const newReservation = (new_reservation) => {
    console.log(new_reservation)
    return dispatch => {
        axios.post('http://localhost:8000/time_slots/new', new_reservation)
            .then(()=> dispatch({
                type: NEW_RESERVATION
            }))
    }
}

export const updateReservation = (new_time_slot) => {
    console.log(new_time_slot)
    return dispatch => {
        axios.post('http://localhost:8000/time_slots/new', new_time_slot)
            .then(()=> dispatch({
                type: UPDATE_RESERVATION
            }))
    }
}

export const fetchReservation = (id) => {
    console.log(id)
    return dispatch => {
        axios.post(`http://localhost:8000/time_slots/${id}`)
            .then((result)=> dispatch({
                type: FETCH_RESERVATION,
                payload: result.data,
            })) 
    }
}

export const deleteReservation = () => {
    return dispatch => {
        axios.delete('http://localhost:8000/time_slots/toddporter99@gmail.com')
            .then(()=> dispatch({
                type: DELETE_RESERVATION
            }))
    }
}

