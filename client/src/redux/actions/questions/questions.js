import axios from 'axios';

import * as questionTypes from './questions.types'



// get questions
export const getPosts = () => async dispatch => {

    try{

        const res = await axios.get('http://localhost:5000/api/questions');
        console.log(res.data);

        dispatch({
            type: questionTypes.GET_POSTS,
            payload: res.data.data
        });

        //return "success";


    } catch(err) {
        dispatch({
            type: questionTypes.QUESTION_ERROR,
            payload: err
        })
    }

}


// get a single question
export const getPost = id => async dispatch => {
    try{

        const res = await axios.get(`http://localhost:5000/api/questions/${id}`); // Remaining

        dispatch({
            type: questionTypes.GET_POSTS,
            payload: res.data
        })

    } catch(err) {
        dispatch({
            type: questionTypes.QUESTION_ERROR,
            payload: err
        })
    }
}



// add a question
export const addQuestion = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }  
    };

    try {
        const res = await axios.post('http://localhost:5000/api/questions', formData, config);

        dispatch({
            type: questionTypes.ADD_QUESTION,
            payload: res.data
        });



    } catch(err) {
        dispatch({
            type: questionTypes.QUESTION_ERROR,
            payload: err
        })
    }
}


/// delete a question
export const deleteQuestion = id => async dispatch => {

    try {
        const res = await axios.delete(`http://localhost:5000/api/questions/${id}`);

        dispatch({
            type: questionTypes.DELETE_QUESTION,
            payload: id
        })
    } catch(err) {
        dispatch({
            type: questionTypes.QUESTION_ERROR,
            payload: err
        })
    }
}