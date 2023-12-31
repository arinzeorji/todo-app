import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    SET_CURRENT,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    CLEAR_CURRENT,
    SEARCH_LOGS
} from './types';

// GET LOGS FROM SERVER
export const getLogs = () => async dispatch => {

    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}


// ADD LOGS FROM SERVER
export const addLog = (log) => async dispatch => {

    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//UPDATE LOG
export const updateLog = log => async dispatch => {

    setLoading();
    try {
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//SEARCH LOGS
export const searchLogs = text => async dispatch => {

    setLoading();

    try {

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json()

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// SET CURRENT LOG TO STATE
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// CLEAR CURRENT LOG FROM STATE
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}