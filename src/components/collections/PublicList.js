import React, { useState, useEffect } from 'react';
import { PublicCard } from './PublicCard';
import { getAllRecyclables, addToList, getSingleCyc } from '../../modules/PublicListManager';
import {useHistory} from 'react-router-dom'
// import {getRecyclableById} from '../../modules/PrivateListManager'


export const PublicList = () => {

    const [publics, setPublics] = useState([]);
    const history = useHistory();
    
    // const { recyclableId } = useParams(); 

    const currentUser = sessionStorage.getItem("recyclePedia_user")

    const getPublicRecyclables = () => {
        
        return getAllRecyclables()
            .then(res => {
                setPublics(res)
            });
    };

    
   
    const handleAddToList = (evt,id) => {
      evt.preventDefault()
      getSingleCyc() 
       
        // setIsLoading(false)
        const newRec = {
            userId: parseInt(currentUser),
            recyclableId: id,
            userNotes: ""
            
        }
        // newRec[evt.target.id] = evt.target.value
        console.log(newRec)
        addToList(newRec)
        .then(() => history.push("/collections"))
      
    }
    
    

    useEffect(() => {
        getPublicRecyclables();
    }, []);

    // useEffect(() => {
    //     getSingleCyc()
        
    // }, [])
    

    return (
        <> 
        <button type="button"
                    className="button"
                    onClick={() => { history.push("/collections/create") }}>
                    Add a New Recyclable
            </button>
           
            <div className="container-cards">
                {publics.map(cyc =>
                    < PublicCard 
                        key={cyc.id}
                        recyclable={cyc}
                        handleAddToList = {handleAddToList}


                        
                    />)}
            </div>
        </>
    )
}