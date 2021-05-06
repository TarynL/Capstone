import React, { useState, useEffect } from 'react';
import { PublicCard } from './PublicCard';
import { getAllRecyclables, addToList, deleteRecyclable } from '../../modules/PublicListManager';
import { useHistory } from 'react-router-dom'
import { getMyRecyclables } from '../../modules/PrivateListManager';



export const PublicList = () => {

    const [recyc, setRecyc] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [mine, setMine] = useState([])
    let isSelected = false
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);



    const currentUser = sessionStorage.getItem("recyclePedia_user")

    const getPublicRecyclables = () => {

        return getAllRecyclables()
            .then(res => {
                setSearchResults(res)
                setRecyc(res)
                setIsLoading(false)
            });
    };

    const getAllMyRecyclables = () => {
        return getMyRecyclables()
            .then(res => {
                setMine(res)
            })
    }




    const handleSearch = (evt) => {
        evt.preventDefault()
        let userInput = evt.target.value
        let searchMatch = []
        if (userInput.length > 0) {
            searchMatch = recyc.filter(res => {
                if (res.title.toLowerCase().includes(userInput.toLowerCase()))
                    return res.title
            })
            setSearchResults(searchMatch)
        }
        else {
            setSearchResults(recyc)
        }
    }



    const handleAddToList = (recyclableId) => {

        const newRec = {
            userId: parseInt(currentUser),
            recyclableId: recyclableId,
            userNotes: "",

        }
        addToList(newRec)
        // .then(alert("Recyclable has successfully been added to your list."))

    }
    const handleDeleteFromList = (id) => {
        deleteRecyclable(id)
            .then(() => getAllMyRecyclables(id))

    }


    useEffect(() => {
        getAllMyRecyclables()
        getPublicRecyclables();
    }, []);





    if (isLoading === false) {
        return (
            <>
                <div className="headerButtons">
                    

                    <form id="form">
                        <i class="fas fa-search"></i>
                        <input class="search" type="text" required placeholder="Search for Recyclable..."
                            onChange={handleSearch} />
                    </form>
                    <button type="button"
                        className="button btn-add"
                        onClick={() => { history.push("/collections/create") }}>
                        Add a New Recyclable
                </button>
                </div>
                <div className="container cards">

                    <div className="row">

                        {searchResults.map(cyc => {

                            let isInList = mine.find(rec => rec.recyclableId === cyc.id)
                            if (isInList) {
                                isSelected = true

                            } else { isSelected = false }

                            return < PublicCard
                                key={cyc.id}
                                recyclable={cyc}
                                isSelected={isSelected}
                                handleAddToList={handleAddToList}
                                handleDeleteFromList={handleDeleteFromList}
                            />




                        })}
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }
}