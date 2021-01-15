import * as authTypes from '../../actions/auth/auth.types';


const initialState = {
    token: null,
    loading: true,
    error: null,
    user: null,
    isAuthenticated: false
};


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case authTypes.LOGIN_SUCCESS:
            const { data } = action.payload;
            const { token, userInfo } = data;
            localStorage.setItem('token', token);
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            return {
                ...state,
                /*...action.payload,*/
                isAuthenticated: true,
                loading: false
            };

        case authTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false
            };

        case authTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false
            }
        
        case authTypes.LOGOUT:
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        
        default:
            return state;

    }
} 

export default authReducer;