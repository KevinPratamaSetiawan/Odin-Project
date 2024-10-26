import React from 'react';
import { Link } from 'react-router-dom';

const FormChangeAnchor = ({ anchorText, anchorRedirectUrl, anchorRedirectForm }) => {
    return (
        <div className='form-change-anchor'>
            <p>{anchorText} <Link to={anchorRedirectUrl}>{anchorRedirectForm}</Link></p>
        </div>
    );
};

export default FormChangeAnchor;