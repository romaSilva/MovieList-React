import React from 'react'

function Popup({selected, closePopup}) {
    return(
        <section className="popup">
            <img className="poster" src={selected.Poster} alt="poster" />
            <div className="info">
                <h2 className="pop-title">{selected.Title}</h2>
                <div className="details"> 
                    <div className="line">    
                        <div className="directed-by">
                            <h3 className="subtitle">Directed by</h3>
                            <span className="content">{selected.Director}</span>
                        </div>
                        <div className="release-date">
                            <h3 className="subtitle">Release Date</h3>
                            <span className="content">{selected.Released}</span>
                        </div>
                    </div>


                    <div className="starring">
                        <h3 className="subtitle">Starring</h3>
                        <span className="content">{selected.Actors}</span>
                    </div>
  
                </div>
                <span className="plot">{selected.Plot}</span>
            </div>

            <div className="close-container" onClick={closePopup}>
                <div className="close"></div>
            </div>
        </section>
    )
}

export default Popup