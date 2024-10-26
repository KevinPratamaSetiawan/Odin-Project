import React from 'react';
import AppDescription from './AppDescription';
import LoginForm from './LoginForm';
import FormChangeAnchor from './FormChangeAnchor';

const LoginFormDisplay = () => {
    return (
        <div className='login-form-display'>
            <AppDescription />
            <LoginForm />
            <FormChangeAnchor
                anchorText={"Haven't had an account? "}
                anchorRedirectUrl={'/sign-up'}
                anchorRedirectForm={'Sign-Up'}
            />
        </div>
    );
};

export default LoginFormDisplay;