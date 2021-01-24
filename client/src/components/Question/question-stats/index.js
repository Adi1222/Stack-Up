import React from 'react';

const QuestionStats = ({ question: { id, title, body, tags, answers, comments, created_at, views, author } }) => {
    return(
        <div className='container'>
            <div className=''>
                <span>fd</span>
                <p>Answers</p>
            </div>
            <p>{views} views</p>
        </div>
    )
}

export default QuestionStats;