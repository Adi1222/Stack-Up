import React, { Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addQuestion, deleteQuestion, getQuestion, getQuestions } from '../../redux/actions/questions/questions';
import LinkButton from '../../components/LinkButton/LinkButton.component';
import QuestionWrapper from '../../components/Question/question-wrapper';
import QuestionStats from '../../components/Question/question-stats'
import QuestionInfo from '../../components/Question/question-info'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios'

const HomePage = () => {
    

    
    const [questions, setquestions] = useState(null)
    const [sortType, setSortType] = useState('Newest')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getQuestions = async () => {
            const res =  await axios.get('http://localhost:5000/api/questions');
            const data = res.data;
            setquestions(data);
            setLoading(false);
        }

    });



    /*const handleSorting = () => {
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
    }*/
    
    return(
         
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
                            <QuestionWrapper key={post.id}>
                                <QuestionStats 
                                    question={post}
                                />
                                <QuestionInfo 
                                    id={post.id}
                                    title={post.title}
                                    author={post.author}
                                    tags={post.tags}
                                    created_at={post.created_at}
                                    >
                                        {post.body}
                                    </QuestionInfo>
                            </QuestionWrapper>
                        ))
                    }
                </div>

            </div>
    )

}

/*
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

*/

export default HomePage;