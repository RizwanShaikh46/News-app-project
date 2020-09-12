import React from 'react'
import Loader from 'react-loader-spinner'
import './LoadingScreen.css'
function LoadingScreen() {
    return (
        <div className="container">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={200}
                width={200}
                //timeout={3000} //3 secs
            />
        </div>
    );
}

export default LoadingScreen