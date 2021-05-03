import React, { useState, useEffect } from 'react';
import { updateRecyclable, getCycById } from "../../modules/PrivateListManager";
import "./Private.css";
import { useHistory, useParams } from 'react-router-dom';

// component for editing private list cards
// declare state variable
// useParams returns an object of the params for the route rendered
export const PrivateEdit = () => {
    const [recyclable, setRecyclable] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { recyclableId } = useParams();
    const history = useHistory();

    // function to handle the field change on edit form
    // make a copy of the state to change
    // look in the object copy and find the id of the key we are looking for
    // setState passing in stateToChange
    const handleFieldChange = (event) => {

        const stateToChange = { ...recyclable };

        let editVal = event.target.value;
        if (event.target.id.includes("Id")) {
            editVal = parseInt(editVal);
        }
        
        stateToChange[event.target.id] = editVal
        setRecyclable(stateToChange);
    };

    // function for updating private recyclable card
    // name variable for edited object 
    // run update function passing in new object
    // then push to yourList
    const updateExistingRecyclable = event => {
        event.preventDefault();
        setIsLoading(true);

        const editedRec = {
            id: recyclable.id,
            userId: recyclable.userId,
            recyclableId: recyclable.recyclableId,
            userNotes: recyclable.userNotes
        };
       
        updateRecyclable(editedRec)
            .then(() => history.push("/yourList"))
    }

    // use effect
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
                        <input type="text" id="userNotes" onChange={handleFieldChange} required placeholder="Add note here..." className="form-control" value= {recyclable.userNotes} />
                    </div>
                
                </fieldset>
                <button className="button"
                    onClick={updateExistingRecyclable}>
                    Save
              </button>
              <button type="cancel" className="button" onClick={() => history.push(`/yourList`)} > Cancel </button>
            </form>)
    } else {
        return null;
    }





}
