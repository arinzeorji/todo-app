import {
    DELETE_TECH,
    GET_TECHS,
    SET_LOADING,
    TECHS_ERROR,
    ADD_TECHS,
} from './types';

//GET TECHS 
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
}

//ADD TECHNICIANS

export const addTechs = log => async dispatch => {

    try {
        setLoading();

        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
}

//DELETE TECHNICIANS
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}