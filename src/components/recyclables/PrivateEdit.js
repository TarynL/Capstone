import React, { useState, useEffect } from 'react';
import { updateRecyclable, getCycById } from "../../modules/PrivateListManager";
import "./Private.css";
import { useHistory, useParams } from 'react-router-dom';


export const PrivateEdit = () => {
    const [recyclable, setRecyclable] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { recyclableId } = useParams();
    const history = useHistory();



    const handleFieldChange = (event) => {

        const stateToChange = { ...recyclable };

        let editVal = event.target.value;
        if (event.target.id.includes("Id")) {
            editVal = parseInt(editVal);
        }
        
        // target the id off of the expansion
        //    let formType = event.target.id
        //  stateToChange.recyclable[formType] = editVal;
        stateToChange[event.target.id] = editVal
        setRecyclable(stateToChange);
    };

    const updateExistingRecyclable = event => {
        event.preventDefault();
        setIsLoading(true);


        const editedRec = {
            id: recyclable.id,
            userId: recyclable.userId,
            recyclableId: recyclable.recyclableId,
            userNotes: recyclable.userNotes
        };
        console.log(editedRec)
        updateRecyclable(editedRec)
            .then(() => history.push("/yourList"))
    }

    useEffect(() => {

        getCycById(recyclableId)
        .then(res => {

            setRecyclable(res);
            setIsLoading(false)

        });

    }, [recyclableId]);


    if (isLoading === false) {
        return (

            <form className="newForm">
                <h2 className="form_title">Edit Notes</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="edit_userNotes">Note: </label>
                        <input type="text" id="userNotes" onChange={handleFieldChange} required className="form-control" value={recyclable.userNotes} />
                    </div>
                
                </fieldset>
                <button className="button"
                    // disabled={isLoading}
                    onClick={updateExistingRecyclable}>
                    Save
              </button>
              <button type="cancel" className="button" onClick={() => history.push(`/yourList`)} > Cancel </button>
            </form>)
    } else {
        return null;
    }





}
