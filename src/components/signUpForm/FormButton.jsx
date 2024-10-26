import React from 'react';

const FormButton = ({ buttonContext }) => {
    return (
        <div className='form-button'>
            <button type='submit'>{buttonContext}</button>
        </div>
    );
};

export default FormButton;