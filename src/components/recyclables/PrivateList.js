import React, { useState, useEffect } from 'react';
import { PrivateCard } from './PrivateCard';
import { getMyRecyclables, deleteRecyclable } from '../../modules/PrivateListManager';
import {useHistory} from 'react-router-dom'

export const PrivateList = () => {

    const [privates, setPrivates] = useState([]);
    const history = useHistory();

    const getRecyclables = () => {
        return getMyRecyclables()
            .then(res => {
                setPrivates(res)
            });
    };
    
    const handleDeleteRecyclable = (id) => {
        deleteRecyclable(id)
        .then(() => getMyRecyclables(id)
        .then(setPrivates)
        .then(() => history.push("/yourList"))
        );

    }

    useEffect(() => {
        getRecyclables();
    }, []);

    

    return (
        <> 
            
            <div className="container-cards">
                {privates.map(recyclable =>
                    <PrivateCard
                        key={recyclable.id}
                        recyclable={recyclable}
                        handleDeleteRecyclable={handleDeleteRecyclable}
                    />)}
            </div>
        </>
    )
}