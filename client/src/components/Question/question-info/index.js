import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../Tag'


const QuestionInfo = ({id, title, author, created_at, tags, body}) => {
    return(
        <div>
            <Link  className='' to={`questions/${id}`}>{title}</Link>
            <div>{body}</div>
        

          


            <div>
                <span>
                    asked{' '}
                    {
                        new Date(created_at)
                    } 
                </span>
               
            </div>
        </div>
    )
}

export default QuestionInfo;