import * as questionTypes from '../../actions/questions/questions.types';

const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null
};

const questionReducer = (state = initialState, action) => {

    switch(action.type) {
        case questionTypes.GET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false,

            };

        case questionTypes.ADD_QUESTION:
            return {
                ...state,
                posts: [action.payload, ...state.questions],
                loading: false
            };

        case questionTypes.DELETE_QUESTION:
            return {
                ...state,
                // remove the deleted tquestion from the state questions array
                posts: state.posts.filter(ques => ques.id !== action.payload),
                loading: false
            };

        
        case questionTypes.GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            };

        case questionTypes.QUESTION_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }

}


export default questionReducer;