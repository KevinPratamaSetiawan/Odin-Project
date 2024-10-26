import React from 'react';
import ProjectsListDisplay from './projectListDisplay';

const DashboardContent = ({ projectDatas }) => {
    return (
        <div className='dashboard-content'>
            <ProjectsListDisplay 
                projectDatas={projectDatas}
            />
        </div>
    );
};

export default DashboardContent;