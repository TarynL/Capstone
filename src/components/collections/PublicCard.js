import React, { useEffect, useState } from 'react';
import { getMyRecyclables } from "../../modules/PrivateListManager"
import './Public.css'


export const PublicCard = ({ recyclable, handleAddToList, handleDeleteFromList, isSelected }) => {
    const [userCyc, setUserCyc] = useState([])
    const [selected, setSelected] = useState(isSelected);
    

    const toggleSelected = (evt) => {
        
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
                    <div className ="card-title"><h4>{recyclable.title}</h4></div>
                    {/* img-fluid-className for image  */}
                    <div className= "imageBox"><img className="recyclableImage " src={recyclable.image} alt="recyclable" /></div>
                    <div className= "par"><p><strong>Instructions: </strong> {recyclable.instruction}</p></div>

                    <div className="tog">
                        <div className="toggle-container" required onClick={toggleSelected} >
                        <div className={`dialog-button ${selected ? "" : "disabled"}`} required 
                            onClick={selected ? () => getNewRecyc() : () => handleAddToList(recyclable.id)}  >
                            {selected ? "Remove" : "Add"}
                        </div>
                    </div></div>

                </div>
            </div>
        </>
    )
}


