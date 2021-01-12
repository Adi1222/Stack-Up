const initialState = {
    token: null,
    loading: true,
    error: null,
    user: null,
    isAuthenticated: false
};


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
} 

export default authReducer;