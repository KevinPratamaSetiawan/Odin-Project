import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectGithubUrl = ({ projectGithubUrl, projectName }) => {
    return (
        <div className='project-github-url'>
            <FontAwesomeIcon icon={faSquareGithub} />
            <Link to={ projectGithubUrl }>{ projectName } </Link>
        </div>
    );
};

export default ProjectGithubUrl;