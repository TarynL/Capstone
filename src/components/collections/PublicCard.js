import React  from 'react';
import './Public.css'


export const PublicCard = ({recyclable}) => {
   
    
    return (
        <>
        <div className="card">
            <div className="card-content">
                <h3>{recyclable.title}</h3>
                <img className="recyclableImage" src={recyclable.image} alt="recyclable"/>
                <p><strong>Instructions: </strong> {recyclable.instruction}</p>
            </div>
           
        </div>
        </>
    )
}