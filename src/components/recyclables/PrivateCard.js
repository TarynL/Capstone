import React from 'react';
import './Private.css'
import { useHistory } from "react-router-dom";


// component for private list cards
// deconstructs the props so the dom can render each value 
// edit button event listener on the OnClick pushes to edit page
// delete button event listener on the OnClick runs delete function to remove from dom&database
export const PrivateCard = ({ recyclable, handleDeleteRecyclable }) => {
    const history = useHistory();

    return (
        <>
        
            <div className="card col-2">
                <div className="card-content ">
                    <h3>{recyclable.recyclable.title}</h3>
                    <img className="recyclableImage img-fluid" src={recyclable.recyclable.image} alt="recyclable" />
                    <p><strong>Instructions: </strong> {recyclable.recyclable.instruction}</p>
                    <p><strong>Notes:</strong>{recyclable.userNotes}</p>
                </div>
                <button type="button"
                    className="button"
                    onClick={() => history.push(`/yourList/${recyclable.id}/edit`)}>
                    Add/Edit Notes
            </button>
                <button type="button" className="button" onClick={() => handleDeleteRecyclable(recyclable.id)}>Delete</button>
            </div>
        </>
    )
}