import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { logout } from '../../redux/actions/auth/auth';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RiStackLine } from 'react-icons/ri'
import LinkButton from '../LinkButton/LinkButton.component';

import './Header.css'


const Header = ({ isAuthenticated, loading, user, err, logout }) => {

    let history = useHistory();


    const logoutLink = (
        <div className='btns'>
            { loading  ? <CircularProgress /> :  <Link to={`/users/${user.id}`} title={user.username}>
                <img alt='user-logo' className='userlogo'
                     src={`https://secure.gravatar.com/avatar/${user.id}?s=164&d=identicon`}/>
            </Link>}
            <LinkButton 
                text={'Log Out'} 
                link={'/logout'} 
                handleClick={logout}
                type={'s-btn__filled'} />
        </div>
    )

    

    const loginLink = (
        <div>
            Login
        </div>
    )


    return loading ? '' : <header className='header'>
        <div className='container'>
            <Link className='logo' to='/'>
                    <RiStackLine />
                    <p>
                        Stack Up
                    </p>
            </Link>
            <div style={{ flex: 1 }}></div>
            {!loading && <Fragment>{isAuthenticated ? logoutLink : loginLink}</Fragment>}
        </div>
    </header>


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





/**
 * <Fragment>
        <nav className='navbar fixed-top'>
            <Link className='navbar-logo' to='/'>
                <RiStackLine />Stack Up
            </Link>
            {!loading && <Fragment>{isAuthenticated ? logoutLink : loginLink}</Fragment>}
        </nav>
    </Fragment>
 */