import axios from 'axios';
import {
    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAIL,
    CLEAR_ERRORS
} from '../Constants/courseConstants';

export const getCourse = (course) => async (dispatch) => {
    try {

        dispatch({
            type: GET_COURSE_REQUEST
        })

        const { data } = await axios.get(`/api/v1/course/${course}`)

        dispatch({
            type: GET_COURSE_SUCCESS,
            payload: data.course
        })

    } catch (error) {
        dispatch({
            type: GET_COURSE_FAIL,
            payload: error.response.data.message
        })
    }
};


//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}