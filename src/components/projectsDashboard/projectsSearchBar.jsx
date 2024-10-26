import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const ProjectsSearchBar = ({searchProject}) => {
    const [searchText, setSearchText] = React.useState('');

    const onSearchTextChangeEventHandler = (event) => {
        setSearchText(event.target.value);
    };

    const onSearchEventHandler = (event) => {
        if (searchText.trim()) {
            event.preventDefault();
            searchProject(searchText);
        }
    }

    return (
        <div className='projects-search-bar'>
            <form onSubmit={onSearchEventHandler}>
                <input
                    id="search-bar"
                    type="text"
                    value={searchText}
                    onChange={onSearchTextChangeEventHandler}
                    placeholder='Search Project..'
                />
                <button type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
                </button>
            </form>
        </div>
    )
};

export default ProjectsSearchBar;