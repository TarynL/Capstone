import React from 'react';
import './Public.css'


export const SearchCard = ({ recyclable, handleAddToList }) => {


    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h3>{recyclable.title}</h3>
                    <img className="recyclableImage img-fluid" src={recyclable.image} alt="recyclable" />
                    <p><strong>Instructions: </strong> {recyclable.instruction}</p>
                    <button className="button"
                        onClick={() => handleAddToList(recyclable.id)}>
                        Add
                    </button>
                </div>

            </div>
        </>
    )
}