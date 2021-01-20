import * as questionTypes from '../../actions/questions/questions.types';

const initialState = {
    questions: [],
    question: null,
    loading: true,
    error: null
};

const questionReducer = (state = initialState, action) => {

    switch(action.type) {
        case questionTypes.ADD_QUESTION:
            return {
                ...state,
                questions: [action.payload, ...state.questions],
                loading: false
            };

        case questionTypes.DELETE_QUESTION:
            return {
                ...state,
                // remove the deleted tquestion from the state questions array
                questions: state.questions.filter(ques => ques.id !== action.payload),
                loading: false
            };

        case questionTypes.GET_QUESTIONS:
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        
        case questionTypes.GET_QUESTION:
            return {
                ...state,
                question: action.payload,
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