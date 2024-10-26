import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from './FormButton';

const SignUpForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigate = useNavigate();

    const onUsernameChangeEventHandler = (event) => {
        setUsername(event.target.value);
    };

    const onPasswordChangeEventHandler = (event) => {
        setPassword(event.target.value);
    };

    const onConfirmPasswordChangeEventHandler = (event) => {
        setConfirmPassword(event.target.value);
    };

    const onSignUpEventHandler = (event) => {
        event.preventDefault();
        document.getElementById('usernameLabel').classList.remove('input-error');
        document.getElementById('passwordLabel').classList.remove('input-error');
        document.getElementById('confirmPasswordLabel').classList.remove('input-error');
        document.getElementById('confirmPasswordLabel').classList.remove('pass-different');

        if (!username.trim()){
            document.getElementById('usernameLabel').classList.add('input-error');
        }
        
        if (!password.trim()){
            document.getElementById('passwordLabel').classList.add('input-error');
        }
        
        if (!confirmPassword.trim()){
            document.getElementById('confirmPasswordLabel').classList.add('input-error');
        }else if(password.trim() !== confirmPassword.trim()){
            document.getElementById('confirmPasswordLabel').classList.add('pass-different');
        }
        
        if (username.trim() && password.trim() && confirmPassword.trim() && password.trim() === confirmPassword.trim()) {
            localStorage.setItem('registeredUsername', username);
            localStorage.setItem('registeredPassword', password);
            localStorage.setItem('hasAccount', 'true');

            navigate('/login');
        }
    };

    return (
        <div className='sign-up-form'>
            <h2>Sign-Up</h2>
            <form onSubmit={onSignUpEventHandler}>
                <label htmlFor="username" id='usernameLabel'>Username<span>*</span></label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={onUsernameChangeEventHandler}
                    placeholder='Your name here..'
                />
                <br />
                <label htmlFor="password" id='passwordLabel'>Password<span>*</span></label>
                <input
                    id="password"
                    type='password'
                    value={password}
                    onChange={onPasswordChangeEventHandler}
                    placeholder='Your password here..'
                />
                <br />
                <label htmlFor="confirmPassword" id='confirmPasswordLabel'>Confirm Password<span>*</span></label>
                <input
                    id="confirmPassword"
                    type='password'
                    value={confirmPassword}
                    onChange={onConfirmPasswordChangeEventHandler}
                    placeholder='Repeat your password here..'
                />
                <br />
                <FormButton buttonContext={'Create Account'} />
            </form>
        </div>
    );
};

export default SignUpForm;