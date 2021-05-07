import React from 'react';
// import {getRecycCenters} from "../../modules/HomeManager"

export const LocationCard = ({location}) => {
    // const [local, setLocal] = useState([])

    // const getNewLocation = () => {
    //     getRecycCenters()
    //     .then(res => setLocal(res))
    // }

    // useEffect(() => {
    //     getRecycCenters()
    // }, [])

    return (
        <>
        <div className="location-list">
        
            <h5 className="location-name"><b><u><a href="https://www.google.com/maps/@36.1868667,-87.0661216,10z">{location.facility_name}</a></u></b></h5>
            <p><b>Address:</b> {location.address} </p>
            <p><b>Hours of operation:</b></p>
             
                <p><b>Monday:</b> {location.monday}</p>
                <p><b>Tuesday:</b> {location.tuesday}</p>
                <p><b>Wednesday:</b> {location.wednesday}</p>
                <p><b>Thursday: </b> {location.thursday}</p>
                <p><b>Friday: </b> {location.friday}</p>
                <p><b>Saturday: </b> {location.saturday}</p>
                <p><b>Sunday: </b> {location.sunday}</p>
            
        </div>
        
        
        </>
    )
}


{/* <a href="https://www.google.com/maps/@36.1868667,-87.0661216,10z">{location.facility_name}</a> */}