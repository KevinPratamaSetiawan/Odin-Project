import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from './FormButton';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const onUsernameChangeEventHandler = (event) => {
        setUsername(event.target.value);
    };

    const onPasswordChangeEventHandler = (event) => {
        setPassword(event.target.value);
    };

    const onLoginEventHandler = (event) => {
        event.preventDefault();
        document.getElementById('usernameLabel').classList.remove('input-error');
        document.getElementById('passwordLabel').classList.remove('input-error');
        document.getElementById('usernameLabel').classList.remove('input-false');
        document.getElementById('passwordLabel').classList.remove('input-false');

        const registeredUsername = localStorage.getItem('registeredUsername');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (!username.trim()){
            document.getElementById('usernameLabel').classList.add('input-error');
        }else if (username.trim() !== registeredUsername){
            document.getElementById('usernameLabel').classList.add('input-false');
        }
        
        if (!password.trim()){
            document.getElementById('passwordLabel').classList.add('input-error');
        }else if (password.trim() !== registeredPassword){
            document.getElementById('passwordLabel').classList.add('input-false');
        }

        if (username.trim() === registeredUsername && password.trim() === registeredPassword) {
            sessionStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        }
    };

    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={onLoginEventHandler}>
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
                <FormButton buttonContext={'Login'} />
            </form>
        </div>
    );
};

export default LoginForm;