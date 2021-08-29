import {
    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAIL,
    CLEAR_ERRORS
} from '../Constants/courseConstants';

export const courseReducer = (state = { course: [] }, action) => {
    switch(action.type) {
        case GET_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                course: action.payload
            }
        case GET_COURSE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }
};