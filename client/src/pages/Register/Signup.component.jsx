import React, { Fragment , useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';
import  PropTypes from 'prop-types';


import SignupFormComponent from '../../components/AuthForm/SignupForm.component';
import PageContainer from '../../components/PageContainer/PageContainer.component';
import HomePage from '../Homepage/HomePage.component';

const HomePageComp = PageContainer(HomePage);

const Signup = ({ isAuthenticated }) => {
  if (isAuthenticated === true) {
    return <Fragment>
    <HomePageComp />
  </Fragment>
  }


  return <Fragment>
    <SignupFormComponent />
  </Fragment>

}


Signup.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};


export default connect(mapStateToProps, null)(Signup);