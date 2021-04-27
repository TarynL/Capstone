import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {addRecyclable} from '../../modules/PublicListManager';
import './Public.css';

export const PublicForm = () => {
    // const loggedInUser = JSON.parse(sessionStorage.getItem("recyclePedia_user"))
    const [recyclable, setRecyclable] = useState({
        title: "",
        image: "",
        instruction: "",
        recycle: true //may want to change this for nonrecycle stretch goal
    });

    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const handleControlledInputChange = (evt) => {
        const newRecyclable = {...recyclable}
        newRecyclable[evt.target.id] = evt.target.value
        setRecyclable(newRecyclable)
    }

    const handleClickSaveRecyclable = (evt) => {
        evt.preventDefault()
        setIsLoading(false)
        addRecyclable(recyclable)
        // another .then to add new recyclable to lists
        .then(() => history.push("/collections"))
        
    }

    return (

    <form className= "newForm">
        <h2 className="form_title">New Recyclable Form</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="new_title">Product Name: </label>
                <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Product name" value={recyclable.title} />
            </div>
            <div className="form-group">
                <label htmlFor="new_image">Image URL: </label>
                <input type="text" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image URL" value={recyclable.image} />
            </div>
            <div className="form-group">
                <label htmlFor="new_instructions">Instructions: </label>
                <input type="text" id="instruction" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Instructions" value={recyclable.instruction} />
            </div>
        </fieldset>
        <button className="button"
                disabled={isLoading}
				onClick={handleClickSaveRecyclable}>
				Save Recyclable
          </button>
    </form>
    )

}
