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
        
            <h5 className="location-name"><b><u>{location.facility_name}</u></b></h5>
            <p><b>Address:</b> {location.address} </p>
            <ul> Hours of operation:
                <li><b>Monday:</b> {location.monday}</li>
                <li><b>Tuesday:</b> {location.tuesday}</li>
                <li><b>Wednesday:</b> {location.wednesday}</li>
                <li><b>Thursday: </b> {location.thursday}</li>
                <li><b>Friday: </b> {location.friday}</li>
                <li><b>Saturday: </b> {location.saturday}</li>
                <li><b>Sunday: </b> {location.sunday}</li>
            </ul>
        </div>
        
        
        </>
    )
}