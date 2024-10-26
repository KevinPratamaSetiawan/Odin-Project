import React from 'react';
import ProjectButton from './projectButton';
import ProjectGithubUrl from './projectGithubUrl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = ({ projectLink, projectGithubUrl, projectName, projectDescription }) => {
    return (
        <li className='project-item'>
            <details>
                <summary>
                    <p>
                        { projectName }
                    </p>
                    <FontAwesomeIcon icon={faCircleInfo} />
                </summary>

                <div>
                    <p>{ projectDescription }</p>
                </div>

                <div>
                    <ProjectGithubUrl 
                        projectGithubUrl={projectGithubUrl}
                        projectName={projectName}
                    />
                    <ProjectButton
                        projectLink={projectLink}
                        projectName={projectName}
                    />
                </div>
            </details>
        </li>
    );
};

export default ProjectItem;