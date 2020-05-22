import React from 'react'
import Header from './Header.js'

function Background() {


    

    const colorsArray = ['#FC306A', '#FFF700', '#00FFF2']

    const randomColor = () => {
        const random =Math.floor( Math.random() * 3 )
        return colorsArray[random]
    }

    let color = randomColor();

    return(
        <div className="background">

            <span className="up" style={{backgroundColor: color}}></span>
            <span className="right" style={{backgroundColor: color}}></span>
            <span className="down" style={{backgroundColor: color}}></span>
            <span className="left" style={{backgroundColor: color}}></span>

            <Header />
            <p className="title">Track films. Save those you want to see. Tell your friends what’s good.</p>
        </div>
    )
}

export default Background