import React from 'react'
import Result from './Result'

function Results({results, openPopup}) {

    const resultsJSX = results.map((result, i) => {
            if(i < 8){
                return(
                    <Result key={result.imdbID} result={result} openPopup={openPopup} />
                )
            }
        })
    

    return(
           
        <section className="results">
            {resultsJSX}
        </section>
   
    )

    
}

export default Results