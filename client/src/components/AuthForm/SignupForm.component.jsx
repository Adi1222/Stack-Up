import React, { Fragment , useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';
import  PropTypes from 'prop-types';
import { register } from '../../redux/actions/auth/auth';
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

  const useStyles = makeStyles((theme) => ({
    cont: {
      paddingTop: "13%",
      paddingBottom: "13%",
    },
    welcome: {
      fontSize: "51px",
      // paddingBottom: '15%'
    },
    heading: {
      paddingTop: "10px",
    },
  }));



const SignupForm = ({ isAuthenticated, register }) => {

  const classes = useStyles();

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const { username, password } = values;

    const [passwordError, setPasswordError] = useState(false);
    
    console.log(isAuthenticated)

    

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

        register({username, password});

    }



    return (
        <Container component="main" maxWidth="sm">
        <div>
          <Typography className={classes.welcome}>Stack UP</Typography>
          <Paper elevation={5}>
            <form className={classes.form} onSubmit={handleSubmit}>
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
                Sign Up
              </Button>
              <Link to="/login" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </form>
          </Paper>
        </div>
      </Container>
    )


}


SignupForm.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      register: (username, password) => dispatch(register(username, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);