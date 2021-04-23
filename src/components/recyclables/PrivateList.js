import React, { useState, useEffect} from 'react';
import {PrivateCard} from './PrivateCard';
import {getMyRecyclables} from '../../modules/PrivateListManager';
// import {useHistory} from 'react-router-dom'

export const PrivateList = () => {

    const [privates, setPrivates] = useState([]);
    // const history = useHistory();

    const getRecyclables = () => {
        return getMyRecyclables()
        .then(res => {
            setPrivates(res)
        });
    };

    useEffect(() => {
        getRecyclables();
    }, []);

    return(
        <>
        <div className="container-cards">
        {privates.map(recyclable =>
          <PrivateCard
            key={recyclable.id}
            recyclable={recyclable}
            />)}
      </div>
        </>
    )
}