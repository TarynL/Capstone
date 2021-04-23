import React  from 'react';
import './Private.css'
// import {getSingleRecyclable} from "../../modules/RecyclablesManager";
// import {useHistory} from "react-router-dom";

export const PrivateCard = ({recyclable}) => {
    // history = useHistory();
    
    return (
        <>
        <div className="card">
            <div className="card-content">
                <h3>{recyclable.recyclable.title}</h3>
                <img className="recyclableImage" src={recyclable.recyclable.image} alt="recyclable"/>
                <p><strong>Instructions: </strong> {recyclable.recyclable.instruction}</p>
            </div>
        </div>
        </>
    )
}