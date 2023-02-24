import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


function WindowTracker(){

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        function windowWidth(){
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', windowWidth);
        
        return () => {
            window.removeEventListener('resize', windowWidth)
        }
    }, [width])

    return(
        <h2>{width}</h2>
    )
}


export  function showData(){
    const [show, setShow] = useState(true)
    const [darkMode, setDarkMode] = useState(true);

    function showComponent(){
        setShow(prevShow => !prevShow)
    }

    function handleColor(){
        setLight(prevColor => !prevColor)
    }

    

    return(
        <div style={{backgrounColor: (dark ? darkMode : 'light')}}>
            <button className="btn btn-toggle" onClick={showComponent}>Toggle Show</button>
            {show &&
             <WindowTracker /> 
             }
        <button onClick={handleColor}>Change Bg Color</button>
        </div>
    )
}

ReactDOM.render(<showData />, document.getElementById('root'))