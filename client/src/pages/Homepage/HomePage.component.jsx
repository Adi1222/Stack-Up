import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addQuestion, deleteQuestion, getQuestion, getQuestions } from '../../redux/actions/questions/questions';
import LinkButton from '../../components/LinkButton/LinkButton.component';
import QuestionItem from '../../components/QuestionItem/QuestionItem.component';
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
        loading || questions === null ? <CircularProgress /> : 
            <div>
                <div>
                    <h1>All Questions</h1>
                    <div>
                        <LinkButton
                            text={'Ask Question'}
                            link={'/add/questions'}
                            type={'s-btn__primary'}
                        />
                    </div>
                </div>

                <div>
                    <span>{new Intl.NumberFormat('en-IN').format(questions.length)} Questions</span>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button>Votes</Button>
                        <Button>Views</Button>
                        <Button>Newest</Button>
                        <Button>Oldest</Button>
                    </ButtonGroup>
                </div>

                <div>
                    {
                        questions.map(post => (
                            <QuestionItem key={post.id} question={post} />
                        ))
                    }
                </div>

            </div>
    )

}

HomePage.propTypes = {
    loading: PropTypes.bool,
    getQuestions: PropTypes.func.isRequired,
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