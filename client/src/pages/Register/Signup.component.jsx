import React, { Fragment , useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';
import  PropTypes from 'prop-types';
import { register } from '../../redux/actions/auth/auth';


import SignupFormComponent from '../../components/AuthForm/SignupForm.component';



const Signup = ({ isAuthenticated }) => {
  if (isAuthenticated === true) {
    return <Redirect to="/" />;
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