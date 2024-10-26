import React from 'react';
import AppDescription from './AppDescription';
import SignUpForm from './SignUpForm';
import FormChangeAnchor from './FormChangeAnchor';

const SignUpFormDisplay = () => {
    return (
        <div className='sign-up-form-display'>
            <AppDescription />
            <SignUpForm />
            <FormChangeAnchor
                anchorText={'Already have an account? '}
                anchorRedirectUrl={'/login'}
                anchorRedirectForm={'Login'}
            />
        </div>
    );
};

export default SignUpFormDisplay;