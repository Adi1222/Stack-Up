import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import  PropTypes from 'prop-types';

import LoginFormComponent from '../../components/AuthForm/LoginForm.component';
import PageContainer from '../../components/PageContainer/PageContainer.component';
import HomePage from '../Homepage/HomePage.component';


const HomePageComp = PageContainer(HomePage);

const Login = ({ isAuthenticated }) => {
  if (isAuthenticated === true) {
    return <Fragment>
      <HomePageComp />
    </Fragment>
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