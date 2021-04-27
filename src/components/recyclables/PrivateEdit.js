import React, { useState, useEffect } from 'react';
import { updateRecyclable, getRecyclableById } from "../../modules/PrivateListManager";
import "./Private.css";
import { useHistory, useParams } from 'react-router-dom';


export const PrivateEdit = () => {
    const [rec, setRec] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { recyclableId } = useParams();
    const history = useHistory();



    const handleFieldChange = (event) => {

        const stateToChange = { ...rec };

        let editVal = event.target.value;
        if (event.target.id.includes("Id")) {
            editVal = parseInt(editVal);
        }
        // target the id off of the expansion
        //    let formType = event.target.id
        //  stateToChange.recyclable[formType] = editVal;
        stateToChange[event.target.id] = editVal
        setRec(stateToChange);
    };

    const updateExistingRecyclable = (event) => {
        event.preventDefault();
        setIsLoading(true);


        const editedRec = {
            id: recyclableId,
            userId: rec.userId,
            recyclableId: rec.recyclableId,
            userNotes: rec.userNotes
        };
        updateRecyclable(editedRec)
            .then(() => history.push("/yourList"))
    }

    useEffect(() => {

        getRecyclableById(recyclableId)
        .then(res => {

            setRec(res);
            setIsLoading(false)

        });

    }, []);


    // if (isLoading === false) {
        return (

            <form className="newForm">
                <h2 className="form_title">Edit Notes</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="edit_userNotes">Note: </label>
                        <input type="text" id="userNotes" onChange={handleFieldChange} required className="form-control" value={rec.userNotes} />
                    </div>
                
                </fieldset>
                <button className="button"
                    disabled={isLoading}
                    onClick={updateExistingRecyclable}>
                    Save
              </button>
            </form>)
    // } else {
    //     return null;
    // }





}
