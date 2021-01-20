import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addQuestion, deleteQuestion, getQuestion, getQuestions } from '../../redux/actions/questions/questions';
//import Header from '../../components/Header/Header.component'

const HomePage = ({questions, question, loading, error, getQuestion, getQuestions, addQuestion, deleteQuestion}) => {
    
    
    //const [questions, setquestions] = useState(null)
    const [sortType, setSortType] = useState('Newest')


    useEffect(() => {

        getQuestions();

    }, [getQuestions]);


    const handleSorting = () => {
        switch(sortType) {
            case 'Votes':
                return logic;
            case 'Newest':
                return logic;
            case 'Oldest':
                return logic;
            case 'Views':
                return ;
            default:
                break
        }
    }
    
    return(
        <Fragment>
            <h1>Hi</h1>
        </Fragment>
    )

}


const mapStateToProps = state => {
    return {
        questions: state.quest.questions,
        question: state.quest.question,
        loading: state.quest.loading,
        error: state.quest.error
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getQuestions: () => dispatch(getQuestions()),
        getQuestion: (id) => dispatch(getQuestion()),
        addQuestion: (formdata) => dispatch(addQuestion(formdata)),
        deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);