import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import  PropTypes from 'prop-types';

const Login = ({ isAuthenticated }) => {

    if (isAuthenticated == true) // if already authenticated
    {
        return <Redirect to="/" />;
    }

    return <Fragment>
        <div>
            <h1>LOGIN PAGE</h1>
        </div>
    </Fragment>


}


Login.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

/*const mapDispatchToProps = dispatch => {
    return {

    }
}*/

export default connect(mapStateToProps, null)(Login);