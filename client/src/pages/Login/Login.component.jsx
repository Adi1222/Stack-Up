import React, { Fragment , useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';
import  PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth/auth';
import {
    Container,
    Typography,
    makeStyles,
    Paper,
    TextField,
    Grid,
    Button,
    IconButton,
  } from "@material-ui/core";

  import { Twitter } from "@material-ui/icons";




const Login = ({ isAuthenticated }) => {


    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const { username, password } = values;

    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        
        return () => {
            <Redirect to="/" />
        }
    }, [isAuthenticated])

    const handleChange = (event) => {
        setValues({
            ...values, 
            [event.currentTarget.id]: event.currentTarget.value,
        });


        if (event.currentTarget.id === "password") {
            setPasswordError(event.target.value === "");
        }

    }


    const handleSubmit = async e => {
        e.preventDefault();

        login({ username, password });

    }

    if (isAuthenticated === true) // if already authenticated
    {
        return <Redirect to="/" />;
    }


    return (
        <Container component="main" maxWidth="sm">
        <div>
          <Typography >Login!</Typography>
          <Paper elevation={5}>
            <form  onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id="username"
                    label="Username"
                    type="text"
                    onChange={handleChange}
                    fullWidth
                    required
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={passwordError}
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    id="password"
                    onChange={handleChange}
                    type={values.showPassword ? "text" : "password"}
                    helperText={passwordError ? "This is requied field" : null}
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
  
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign up"}
              </Link>
            </form>
          </Paper>
        </div>
      </Container>
    )


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