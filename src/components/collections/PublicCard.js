import React, { useEffect, useState } from 'react';
import {getMyRecyclables} from "../../modules/PrivateListManager"
// import { getSingleCyc } from '../../modules/PublicListManager';
import './Public.css'


export const PublicCard = ({  recyclable, handleAddToList, handleDeleteFromList, isSelected}) => {
   const [userCyc, setUserCyc] = useState([])
    const [selected, setSelected] = useState(isSelected);

const toggleSelected = (evt) => {
    console.log(evt)
    if (selected === true){ setSelected(false)}
    else{ setSelected(true)}
}


useEffect(() => {
    getMyRecyclables()
    .then(res => setUserCyc(res))
}, [])


    return (
        <>

            <div className="card col-2 " >

                <div className="card-content">
                    <h3>{recyclable.title}</h3>
                    <img className="recyclableImage img-fluid" src={recyclable.image} alt="recyclable" />
                    <p><strong>Instructions: </strong> {recyclable.instruction}</p>
                    {/* {console.log(userCyc.find(trashId => trashId.recyclableId === recyclable.id))} */}
                    <div className="toggle-container" required onClick={toggleSelected} >
                        <div value={recyclable.id} className={`dialog-button ${selected ? "" : "disabled"}` } required 
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


