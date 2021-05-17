import React, {useState, useEffect} from 'react';
import {getRecycCenters} from '../../modules/HomeManager'
import {LocationCard} from './LocationsCard'
// import {useHistory} from 'react-router-dom'


export const LocationList = () => {
    const [locations, setLocations] = useState([])
    
    // const history = useHistory()
    

    const getLocations = () => {
        return getRecycCenters()
            .then(res => {
                setLocations(res)
            })
    }

    

    useEffect(() => {
        getLocations();
    }, [])

    return(
        <>
        <div className= "location-container">
            
            {locations.map(location =>
                <LocationCard
                key={location.id}
                location={location}
                />)}
        </div>

        </>
    )
}