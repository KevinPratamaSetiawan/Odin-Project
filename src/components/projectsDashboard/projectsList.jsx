import React from 'react';
import ProjectItem from './projectItem';

const ProjectsList = ({ listName, projectItemsData }) => {
    return (
        <details className='projects-list' open>
            <summary>{ listName }</summary>
            <ul>
                {   
                    projectItemsData.length > 0 ?
                    projectItemsData.map(project => (
                        <ProjectItem 
                            key={project.id}
                            projectLink={ project.link }
                            projectGithubUrl={project.gitLink}
                            projectName={ project.name }
                            projectDescription={ project.description }
                        />
                    )) : (
                        <li><p>no project to be displayed</p></li>
                    )
                }
            </ul>
        </details>
    );
};

export default ProjectsList;