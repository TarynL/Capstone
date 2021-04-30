import React, { useState } from 'react';

import './Public.css'


export const PublicCard = ({ recyclable, handleAddToList, handleDeleteFromList, isSelected}) => {
   
    const [selected, setSelected] = useState(isSelected);

const toggleSelected = () => {
    if (selected === true){ setSelected(false)}
    else{ setSelected(true)}
}

    return (
        <>

            <div className="card col-2 " >

                <div className="card-content">
                    <h3>{recyclable.title}</h3>
                    <img className="recyclableImage img-fluid" src={recyclable.image} alt="recyclable" />
                    <p><strong>Instructions: </strong> {recyclable.instruction}</p>
                    <div className="toggle-container" required onClick={toggleSelected}>
                        <div className={`dialog-button ${selected ? "" : "disabled"}` } required
                            onClick={selected ? () => handleDeleteFromList(recyclable.id) : () => handleAddToList(recyclable.id)}  >
                            {selected ? "Remove" : "Add"}
                        </div>
                    </div>


    


                </div>
            </div>
        </>
    )
}

// PublicCard.propTypes = {
//        selected: PropTypes.bool.isRequired,
//        toggleSelected: PropTypes.func.isRequired}

/* <button className="button"

onClick={() => handleAddToYourList(recyclable.id)}>
Add
</button> */


