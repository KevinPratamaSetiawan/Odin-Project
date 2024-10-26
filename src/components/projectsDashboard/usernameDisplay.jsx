import React from 'react';

const UsernameDisplay = () => {
    const username = localStorage.getItem('registeredUsername');

    return (
        <div className='username-display'>
            <p>Hi there,</p>
            <p>{ username }</p>
        </div>
    );
};

export default UsernameDisplay;