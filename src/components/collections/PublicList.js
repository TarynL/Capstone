import React, { useState, useEffect } from 'react';
import { PublicCard } from './PublicCard';
// import { SearchCard } from './SearchCard'
import { getAllRecyclables, addToList } from '../../modules/PublicListManager';
import { useHistory } from 'react-router-dom'



export const PublicList = () => {

    // const [publics, setPublics] = useState([]);
    // const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);



    const currentUser = sessionStorage.getItem("recyclePedia_user")

    const getPublicRecyclables = () => {

        return getAllRecyclables()
            .then(res => {
                // setPublics(res)
                setSearchResults(res)
                setIsLoading(false)
            });
    };

    // const handleInputChange = (evt) => {
    //     let stateToChange = evt.target.value
    //     setSearch(stateToChange.toLowerCase())
    // }


    const handleSearch = (evt) => {
        evt.preventDefault()
        let userInput = evt.target.value
        if (userInput.length > 0) {

            let searchMatch = searchResults.filter(res => {

                if (res.title.toLowerCase().includes(userInput.toLowerCase()))
                    return true
            })
            setSearchResults(searchMatch)
        }
        return null
    }




    const handleAddToList = (recyclableId) => {

        const newRec = {
            userId: parseInt(currentUser),
            recyclableId: recyclableId,
            userNotes: ""
        }

        console.log(newRec)
        addToList(newRec)
            .then(alert("Recyclable has successfully been added to your list."))

    }



    useEffect(() => {
        getPublicRecyclables();
    }, []);

    // useEffect(() => {
    //     handleSearch(search);
    // }, [search])



    if (isLoading === false) {
    return (
        <>
            <button type="button"
                className="button"
                onClick={() => { history.push("/collections/create") }}>
                Add a New Recyclable
            </button>
            <form id="form">
                <input type="text" required placeholder="Search for Recyclable..."
                    onChange={handleSearch} />
            </form>

            {/* <div className="container-cards">
                {searchResults.map(cyc =>
                    < SearchCard
                        key={cyc.id}
                        recyclable={cyc}
                        handleSearch={handleSearch} />)}
            </div> */}

            <div className="container-cards">
                {searchResults.map(cyc =>
                    < PublicCard
                        key={cyc.id}
                        recyclable={cyc}
                        handleAddToList={handleAddToList}
                        handleSearch={handleSearch} />)}
            </div>
        </>
    )
}else {
    return null;
}
}