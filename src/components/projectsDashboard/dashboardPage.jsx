import React, { useState, useEffect } from 'react';
import DashboardNavigation from './dashboardNavigation';
import DashboardContent from './dashboardContent';
import { getProjectDatas } from '../../utils';

const DashboardPage = () => {
    const projectDatas = getProjectDatas();
    const [filteredProjects, setFilteredProjects] = React.useState(projectDatas);
    const today = new Date();
    const todayDate = 
        (today.getDate() < 10 ? '0' : '') + today.getDate() + '-' + 
        ((today.getMonth()+1) < 10 ? '0' : '') + (today.getMonth()+1) + '-' + 
        today.getFullYear().toString().slice(2);

    const [currentTime, setCurrentTime] = useState(
        (today.getHours() < 10 ? '0' : '') + today.getHours() + ':' + 
        (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + ':' + 
        (today.getSeconds() < 10 ? '0' : '') + today.getSeconds()
    );

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(
                (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' +
                (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ':' +
                (now.getSeconds() < 10 ? '0' : '') + now.getSeconds()
            );
        }, 1000);

        // Cleanup function
        return () => clearInterval(timer);
    }, []);

    const searchProject = (searchText) => {
        if (searchText.trim()) {
            const projectsFound = projectDatas.filter(project =>
                project.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredProjects(projectsFound);
        } else {
            setFilteredProjects(projectDatas);
        }
    };

    // For Content
    // - Make a function to append child for overview into DashboardContent 

    // For Overview
    // - Make a function to calculate days since

    return (
        <div className='dashboard-page'>
            <DashboardNavigation 
                searchProject={searchProject}
                todayDate={todayDate}
                currentTime={currentTime}
            />

            <DashboardContent 
                projectDatas={filteredProjects}
            />
        </div>
    );
};

export default DashboardPage;