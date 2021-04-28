import React, { useState, useEffect } from 'react';
import { PublicCard } from './PublicCard';
import { getAllRecyclables, addToList } from '../../modules/PublicListManager';
import {useHistory} from 'react-router-dom'
// import {getRecyclableById} from '../../modules/PrivateListManager'


export const PublicList = ({id}) => {

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

    
   
    const handleAddToList = (recyclableId) => {
        

        
        const newRec = {
            userId: parseInt(currentUser),
            recyclableId: recyclableId,
            userNotes: ""
            
        }
        
        console.log(newRec)
        addToList(newRec)
        // add an alert 
      
    }
    
    

    useEffect(() => {
        getPublicRecyclables();
    }, []);

   
    

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