import React from 'react'

function Result({result, openPopup}) {
    
    return(
            <div 
                className="results-title" 
                onClick={() => openPopup(result.imdbID)}>

                <span>{result.Title}</span> 
                <span style={{marginLeft: 15, fontSize: 20}}>{result.Year}</span>            
            </div>  
    )
}


export default Result