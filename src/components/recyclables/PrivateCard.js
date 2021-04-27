import React  from 'react';
import './Private.css'
import {Link} from "react-router-dom"

// import {useHistory} from "react-router-dom";

export const PrivateCard = ({recyclable, handleDeleteRecyclable}) => {
    // history = useHistory();
    
    return (
        <>
        <div className="card">
            <div className="card-content">
                <h3>{recyclable.recyclable.title}</h3>
                <img className="recyclableImage" src={recyclable.recyclable.image} alt="recyclable"/>
                <p><strong>Instructions: </strong> {recyclable.recyclable.instruction}</p>
                <p><strong>Notes:</strong>{recyclable.userNotes}</p>
            </div>
            <Link to={`/yourList/${recyclable.recyclableId}/edit`}>
                    <button>Edit Notes</button>
                </Link>
            <button type="button" className="button" onClick={() => handleDeleteRecyclable(recyclable.id)}>Delete</button>
        </div>
        </>
    )
}