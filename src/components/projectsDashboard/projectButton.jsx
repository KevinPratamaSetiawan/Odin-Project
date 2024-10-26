import React from 'react';
import { Link } from 'react-router-dom';

const ProjectButton = ({ projectLink, projectName }) => {
    return (
        <div className='project-button'>
            <p>Checkout <Link to={ projectLink }>{ projectName } </Link></p>
        </div>
    );
};

export default ProjectButton;