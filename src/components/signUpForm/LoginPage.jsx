import React from 'react';
import LogoDisplay from './LogoDisplay';
import LoginFormDisplay from './LoginFormDisplay';

const LoginPage = () => {
    return (
        <div className='login-page'>
            <LogoDisplay />
            <LoginFormDisplay />
        </div>
    );
};

export default LoginPage;