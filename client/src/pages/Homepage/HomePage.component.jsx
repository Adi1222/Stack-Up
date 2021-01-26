import React, { Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addQuestion, deleteQuestion, getPost, getPosts } from '../../redux/actions/questions/questions';
import LinkButton from '../../components/LinkButton/LinkButton.component';
import QuestionWrapper from '../../components/Question/question-wrapper';
import QuestionStats from '../../components/Question/question-stats'
import QuestionInfo from '../../components/Question/question-info'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios'

const HomePage = ({ posts, post, loading, error, getPosts }) => {
    

    const [newPosts, setNewPosts] = useState([])
    const [sortType, setSortType] = useState('Newest')
    let ps = [{answers: [],
        author: "5ffe98049792604b28f48e7e",
        body: "How to use jsonwebtojen in nodejs?",
        comments: [],
        created_at: "2021-01-13T07:44:32.582Z",
        id: "5ffea4e06dcf7438548e11a3",
        score: 0,
        tags:  ["Js", "nodejs"],
        title: "JWT Authentication in nodejs",
        views: 0}];

    useEffect(() => {

        //getPosts();

        

        const fetchQuestions = async () => {
            const res = await axios.get('http://localhost:5000/api/questions');
            console.log(res.data);

            //setNewPosts(newPosts => [...newPosts, res.data]);

            /*for(var j = 0; j < res.data.length; j++)
            {
                ps.push(res.data[j]);
                console.log(res.data[j]);
            }*/
        };

        fetchQuestions();

    }, []);


    console.log('IN HOME')

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
                    <span>{new Intl.NumberFormat('en-IN').format(ps.length)} Questions</span>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button>Votes</Button>
                        <Button>Views</Button>
                        <Button>Newest</Button>
                        <Button>Oldest</Button>
                    </ButtonGroup>
                </div>

                <div>
                    {
                        ps.map(
                            ({
                                id, 
                                answers,
                                author,
                                comments,
                                created_at,
                                score,
                                tags,
                                title,
                                views,
                                body
                            }) => (
                                <QuestionWrapper key={id}>
                                <QuestionStats 
                                    views={views}
                                />
                                <QuestionInfo 
                                    id={id}
                                    title={title}
                                    author={author}
                                    tags={tags}
                                    created_at={created_at}
                                    >
                                        {body}
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
    getPosts: PropTypes.func.isRequired,
}*/


const mapStateToProps = state => {
    return {
        posts: state.quest.posts,
        post: state.quest.post,
        loading: state.quest.loading,
        error: state.quest.error
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts()),
        getPost: (id) => dispatch(getPost()),
        addQuestion: (formdata) => dispatch(addQuestion(formdata)),
        deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
