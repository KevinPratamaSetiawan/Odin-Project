import React from 'react';

const DateDisplay = ({ todayDate, currentTime }) => {
    return (
        <div className='date-display'>
            <p>{ todayDate }</p>
            <p>{ currentTime }</p>
        </div>
    );
};

export default DateDisplay;