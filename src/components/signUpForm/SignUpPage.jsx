import React from 'react';
import LogoDisplay from './LogoDisplay';
import SignUpFormDisplay from './SignUpFormDisplay';

const SignUpPage = () => {
    return (
        <div className='sign-up-page'>
            <LogoDisplay />
            <SignUpFormDisplay />
        </div>
    );
};

export default SignUpPage;