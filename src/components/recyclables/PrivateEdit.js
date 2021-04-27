import React, { useState, useEffect } from 'react';
import { updateRecyclable, getRecyclableById } from "../../modules/PrivateListManager";
import "./Private.css";
import { useHistory, useParams } from 'react-router-dom';

// import {getSingleRecyclable} from '../../modules/RecyclablesManager'

export const PrivateEdit = () => {
    const [rec, setRec] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { recyclableId } = useParams();
    // console.log(recyclableId)
    const history = useHistory();

    // const [recyclable, setRecyclable] = useState([])
   
    const handleFieldChange = (event) => {
       
        const stateToChange = { ...rec };

        let editVal = event.target.value;
        if (event.target.id.includes ("Id")) {
            editVal = parseInt(editVal);
        }
       let formType = event.target.id
     
        stateToChange.recyclable[formType] = editVal;

        setRec(stateToChange);
    };

    const updateExistingRecyclable = (event) => {
        event.preventDefault();
        setIsLoading(true);
      

        const editedRecyclable = {
            id: rec.id,
            recyclableId: recyclableId,
            title: rec.recyclable.title,
            image: rec.recyclable.image,
            instruction: rec.recyclable.instruction,
            recycle: true 

        };
        updateRecyclable(editedRecyclable)
            .then(() => history.push("/yourList"))
    }

    useEffect(() => {

        getRecyclableById(recyclableId).then(res => {

            setRec(res[0]);
            setIsLoading(false)

        });

    }, [recyclableId]);


    if (isLoading === false) {
        return (

            <form className="newForm">
                <h2 className="form_title">Edit Recyclable</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="edit_title">Product Name: </label>
                        <input type="text" id="title" onChange={handleFieldChange} required className="form-control" value={rec.recyclable.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edit_image">Image URL: </label>
                        <input type="text" id="image" onChange={handleFieldChange} required className="form-control" value={rec.recyclable.image} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edit_instruction">Instructions: </label>
                        <input type="text" id="instruction" onChange={handleFieldChange} required className="form-control" value={rec.recyclable.instruction} />
                    </div>
                </fieldset>
                <button className="button"
                    disabled={isLoading}
                    onClick={updateExistingRecyclable}>
                    Save Recyclable
              </button>
            </form>)
    } else {
        return null;
    }





}
