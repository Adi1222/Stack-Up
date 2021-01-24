import React from 'react';
import { useHistory } from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton.component';
import Button from '@material-ui/core/Button';
 
const Tag = ({ children }) => {

    const history = useHistory();

    const routeChange = (tag) => {
        let path = `/${tag}`;
        history.push(path);
    }


    return (
        <Button variant="contained" color="primary" onClick={routeChange(children)} >
            {children}
        </Button>
    )
}

export default Tag;