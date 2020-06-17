import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { logIn } from 'features/Authentication/authSlice';
import { useHistory } from 'react-router-dom';


LogupForm.propTypes = {
  onSubmit: PropTypes.func,
};

LogupForm.defaultProps = {
  onSubmit: null,
}

function LogupForm(props) {
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const history = useHistory();

    const [name ,setName] = useState();
    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();

    const submit = async (e) => {
      // e.preventfault();
      const newUser = {name , email, password};
    
      axios.post('http://localhost:8080/api/user/register', newUser)
        .then(function (response) {
          const userLogin = {email , password};
          axios.post('http://localhost:8080/api/user/login', userLogin)
            .then(function (response) {
              dispatch(logIn(response.data));
              localStorage.setItem('auth-token', response.data.token);
            })
            .catch(function (error) {
              console.log(error);
          });
        })
        .catch(function (error) {
            console.log(error);
        });
      history.push('/');
    }
    
    return (
        <div className="logup-form">
          <h2>Log Up</h2>
          <form onSubmit={submit}>
            <label htmlFor="logup-name">Name</label>
            <input 
              id="logup-name" 
              type="text" 
              onChange = {e => setName(e.target.value)}/>

            <label htmlFor="logup-email">Email</label>
            <input 
              id="logup-email" 
              type="email"
              onChange = {e=> setEmail(e.target.value)}/>

            <label htmlFor="logup-password">Password</label>
            <input 
              id="logup-password" 
              type="password"
              onChange = {e=> setPassword(e.target.value)}/>

            <button type="submit">Log up </button>
          </form>
        </div>

    );
}

export default LogupForm;