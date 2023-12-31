import {
    TECHS_ERROR, SET_LOADING, ADD_TECHS, GET_TECHS, DELETE_TECH
} from '../actions/types';

const initialState = {
    techs: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case ADD_TECHS:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false
            }
        case TECHS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}