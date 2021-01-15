import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import  PropTypes from 'prop-types';

import LoginFormComponent from '../../components/AuthForm/LoginForm.component';




const Login = ({ isAuthenticated }) => {
  if (isAuthenticated === true) {
    return <Redirect to="/" />;
  }


  return <Fragment>
    <LoginFormComponent />
  </Fragment>

}


Login.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

/*const mapDispatchToProps = dispatch => {
    return {
      login: (username, password) => dispatch(login(username, password)),
    };
};*/

export default connect(mapStateToProps, null)(Login);