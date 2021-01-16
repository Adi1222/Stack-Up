import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { logout } from '../../redux/actions/auth/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RiStackLine } from 'react-icons/ri'
import LinkButton from '../LinkButton/LinkButton.component';

import './Header.css'


const Header = ({ isAuthenticated, loading, user, err, logout }) => {


    const logoutLink = (
        <div>
            { loading  ? <CircularProgress /> :  <Link className='wel' to={`/users/1`}>Welcome Adi</Link>}
            <LinkButton className='logbtn' text={'Log Out'} link={'/logout'} handleClick={logout} />
        </div>
    )

    

    const loginLink = (
        <div>
            Login
        </div>
    )


    return loading ? '' : <Fragment>
        <nav className='navbar fixed-top'>
            <Link className='navbar-logo' to='/'>
                <RiStackLine />Stack Up
            </Link>
            {!loading && <Fragment>{isAuthenticated ? logoutLink : loginLink}</Fragment>}
        </nav>
    </Fragment>


};


Header.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
        user: state.auth.user,
        err: state.auth.error,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);





