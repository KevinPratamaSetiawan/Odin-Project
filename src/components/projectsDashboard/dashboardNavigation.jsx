import React from 'react';
import UsernameDisplay from './usernameDisplay';
import ProjectsSearchBar from './projectsSearchBar';
import DateDisplay from './dateDisplay';

const DashboardNavigation = ({ todayDate, currentTime, searchProject }) => {
    return (
        <div className='dashboard-navigation'>
            <div>
                <img src="../public/black-logo.png" alt="Personal Logo" />
                <UsernameDisplay />
            </div>
            <ProjectsSearchBar
                searchProject={searchProject}
            />
            <DateDisplay
                todayDate={todayDate}
                currentTime={currentTime}
            />
        </div>
    );
};

export default DashboardNavigation;