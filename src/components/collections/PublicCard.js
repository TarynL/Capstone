import React, { useEffect, useState } from 'react';
import { getMyRecyclables } from "../../modules/PrivateListManager"
import './Public.css'


export const PublicCard = ({ recyclable, handleAddToList, handleDeleteFromList, isSelected }) => {
    const [userCyc, setUserCyc] = useState([])
    const [selected, setSelected] = useState(isSelected);
    const [isLoading, setLoading] = useState(true)

    const toggleSelected = (evt) => {
        console.log(evt)
        if (selected === true) { setSelected(false) }
        else { setSelected(true) }
    }


    

    const getNewRecyc = () => {
        getMyRecyclables()
        .then(res => setUserCyc(res))
    }




    useEffect(() => {
        
        if (userCyc[0] !== undefined) {
        let foundRecyc = userCyc.find(trashId => trashId.recyclableId === recyclable.id)
        handleDeleteFromList(foundRecyc.id)}
    }, [userCyc])



    return (
        <>

            <div className="card col-2 " >

                <div className="card-content">
                    <h3>{recyclable.title}</h3>
                    <img className="recyclableImage img-fluid" src={recyclable.image} alt="recyclable" />
                    <p><strong>Instructions: </strong> {recyclable.instruction}</p>

                    <div className="toggle-container" required onClick={toggleSelected} >
                        <div className={`dialog-button ${selected ? "" : "disabled"}`} required 
                            onClick={selected ? () => getNewRecyc() : () => handleAddToList(recyclable.id)}  >
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


