import React from 'react';
import './Private.css'
// import {useHistory} from "react-router-dom";

export const PrivateCard = () => {
    // history = useHistory();

    return (
        <>
        <div className="card">
            <div className="card-content">
                <h3>recyclable.title</h3>
                {/* <img className="recyclableImage" {recyclable.image} alt="recyclable"/> */}
                <p>Instructions: recyclable.instruction</p>
            </div>
        </div>
        </>
    )
}