import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { logIn } from 'features/Authentication/authSlice';
import { useHistory } from 'react-router-dom';

LoginForm.propTypes = {
    
};

function LoginForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();

    const submit = async (e) => {
      const userLogin = {email , password};
      axios.post('http://localhost:8080/api/user/login', userLogin)
        .then(function (response) {
          dispatch(logIn(response.data));
          localStorage.setItem('auth-token', response.data.token);
        })
        .catch(function (error) {
          console.log(error);
      });
      history.push('/');
    }
    
    return (
        <div className="logup-form">
          <h2>Log In</h2>
          <form onSubmit={submit}>
            <label htmlFor="login-email">Email</label>
            <input 
              id="login-email" 
              type="email"
              onChange = {e=> setEmail(e.target.value)}/>

            <label htmlFor="login-password">Password</label>
            <input 
              id="login-password" 
              type="password"
              onChange = {e=> setPassword(e.target.value)}/>

            <button type="submit">Log in </button>
          </form>
        </div>

    );
}

export default LoginForm;