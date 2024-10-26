import React from 'react';
import ProjectButton from './projectButton';
import ProjectGithubUrl from './projectGithubUrl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const ProjectDetailOverview = ({ projectData, daysSince }) => {
    return (
        <div className='project-detail-overview'>
            <div>
                <h3>{projectData.name}</h3>
                <FontAwesomeIcon icon={faX} />
            </div>
            <div>
                <p>{projectData.startDate}</p> / <p>{projectData.endDate}[{daysSince} days ago]</p>
            </div>

            <p>{projectData.description}</p>
            <p>{projectData.techUsed}</p>

            <div>
                <ProjectGithubUrl
                    projectGithubUrl={projectData.gitlink}
                    projectName={projectData.name}
                />
                <ProjectButton
                    projectLink={projectData.link}
                    projectName={projectData.name}
                />
            </div>
        </div>
    );
};

export default ProjectDetailOverview;