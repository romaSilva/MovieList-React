import React, {useEffect} from 'react'

function Alert({alertClose}) {

    useEffect(() => {
        alertClose();
    })

    return(
        <div className="alert">
            <span className="alert-content">Nothing Matched :(</span>
        </div>
    )
}

export default Alert