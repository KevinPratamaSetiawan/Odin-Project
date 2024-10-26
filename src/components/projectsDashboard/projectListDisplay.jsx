import React from 'react';
import ProjectsList from './projectsList';

const ProjectsListDisplay = ({ projectDatas }) => {
    const uniqueListNames = [...new Set(projectDatas.map(item => item.listName))];

    return (
        <div>
            {
                uniqueListNames.map(listName => {
                    const filteredProjects = projectDatas.filter(item => item.listName === listName);

                    return (
                        <ProjectsList
                            key={listName}
                            listName={listName}
                            projectItemsData={filteredProjects}
                        />
                    );
                })
            }
        </div>
    );
};

export default ProjectsListDisplay;