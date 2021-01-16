import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../../components/Header/Header.css'

const LinkButton = ({text, link, handleClick, type, marginTop}) => {

    return(
        <Fragment>
            <Link onClick={handleClick} to={link}>
            <button  className='btns'>
                {text}
            </button>
            </Link>
    </Fragment>
    )

}

export default LinkButton;