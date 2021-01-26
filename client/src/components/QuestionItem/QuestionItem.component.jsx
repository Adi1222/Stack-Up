import React from 'react';
import { Link } from 'react-router-dom';


const QuestionItem = ({ question: { id, title, body, tags, answers, comments, created_at, views, author } }) => {


    return(
        <h1>Hi</h1>
    )
    /*return (
        <div>
            <div>
                <div>
                    <span>0</span>
                    <p>votes</p>
                </div>
                
                <div>
                    <span>{answers.length}</span>
                    <p>answers</p>
                </div>
                
                <div>
                    <span>{views}</span>
                    <p>vies</p>
                </div>
            </div>

            <div> 
                <h1><Link to={`/questions/${id}`}>{title}</Link></h1>
                <div>
                    {body}
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


        </div>
    )*/

}



export default QuestionItem;