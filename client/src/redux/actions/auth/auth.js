import * as authTypes from './auth.types'
import axios from 'axios';


/***********    SIGN-UP     ****************/

export const register = ({ username, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    try {

        const res = await axios.post('http://localhost:5000/api/signup', {
            username: username,
            password: password,
        }, config);


        dispatch({
            type: authTypes.REGISTER_SUCCESS,
            payload: res.data.data
        });




    } catch(err) {
        dispatch({
            type: authTypes.REGISTER_FAIL,
            payload: err
        })
    }
}





/*******************         LOGIN           **************************/

export const login = ({ username, password }) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    try {

        const res = await axios.post('http://localhost:5000/api/login', {
            username: username,
            password: password,
        }, config);

        dispatch({
            type: authTypes.LOGIN_SUCCESS,
            password: res.data.data
        });

        


    } catch (err) {

        dispatch({
            type: authTypes.LOGIN_FAIL,
            payload: err,
        })
    }


}























/*******************         LOGOUT           **************************/


export const logout = () => dispatch => {
    localStorage.removeItem("token");

    dispatch({ type: authTypes.LOGOUT });

}