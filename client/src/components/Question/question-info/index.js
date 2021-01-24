import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../Tag'


const QuestionInfo = ({id, title, author, created_at, tags, children}) => {
    return(
        <div>
            <Link  className='' to={`questions/${id}`}>{title}</Link>
            <div>{children}</div>
            <div>
            </div>

            <div>
                    <Link to={`/users/${author.id}`} title={author.username}>
                        <img alt='user-logo' className='userlogo'
                        src={`https://secure.gravatar.com/avatar/${author.id}?s=164&d=identicon`}/>
                    </Link>
            </div>


            <div>
                <span>
                    asked{' '}
                    {
                        new Date(created_at)
                    } 
                </span>
                <Link to={`/users/${author.id}`}>
                    {author.username}
                </Link>
            </div>
        </div>
    )
}

export default QuestionInfo;