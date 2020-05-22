import React from 'react'

function Search({handleInput, search}) {
    return(
        <div className="search">
            <input 
                type="text"
                placeholder="Search for a movie"
                className="searchbox"  
                onChange={handleInput}  
                onKeyPress={search}
            />
            <div 
                className="search-go" 
                onClick={search}
            >
            </div>
        </div>
    )
}

export default Search