import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from 'features/Authentication/components/LoginForm';

Login.propTypes = {
    
};

function Login(props) {
    return (
        <div className="login">
          <div className="login_form">
            <LoginForm
            //   initialValues={initialValues}
            //   onSubmit={handleSubmit}
            //   isAddMode = {isAddMode}
            />
          </div>
        </div>
    );
}

export default Login;