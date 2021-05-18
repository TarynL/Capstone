import React, { useState, useEffect } from 'react';
import './Home.css'
import { getRandomFact } from "../modules/HomeManager";
import { getRandomTip } from "../modules/HomeManager"
import { FactSpotlight } from "../components/dashboard/FactSpotlight";
// import { Loader } from 'google-maps';
import { LocationList } from "./dashboard/LocationsList"
import { TipsSpotlight } from './dashboard/TipsSpotlight';

// export a function for rendering the home page component 
// declare a new state variable
// declare a function for the fact spotlight
// get randomFact fetch call and then set the state
// use Effect hook for calling nextFact function

export const Home = () => {

    const [factSpotlightId, setFactId] = useState(0);
    const [tipsSpotlightId, setTipsId] = useState(0);

    const nextSpotlightFact = () => {
        getRandomFact().then(setFactId);
    };

    const nextSpotlightTip = () => {
        getRandomTip().then(setTipsId);
    };

    // const loadMap = async () => {
    //     const options = {}
    //     const loader = new Loader('AIzaSyAWskImJ3DIyb2Fo7prAE4097mD31iE7hc', options);

    //     const google = await loader.load();
    //     const map = new google.maps.Map(document.getElementById('map'), {
    //         center: { lat: 36.1627, lng: 86.7816 },
    //         zoom: 8,
    //     });
    // }
    // // let map;

    //   function initMap() {
    //     map = new google.maps.Map(document.getElementById("map"), {
    //       center: { lat: 36.1627, lng: 86.7816},
    //       zoom: 8,
    //     });
    //   }



    useEffect(() => {
        nextSpotlightFact();
        // loadMap()
    }, []);

    useEffect(() => {
        nextSpotlightTip();
    }, []);




    // what will first render on page and re-render everytime the state changes
    return (
        <>

            <div className="grid-container">
                <div className="item1 title">
                    <div className="header">
                        <h1>Welcome to RecyclePedia</h1>
                        <h3>Recycle today for a better tomorrow.</h3>
                        <p>Learn what you can recycle, how to do it properly and more...</p>
                    </div></div>
                <div className="item2 factHighlight">

                    {factSpotlightId && <FactSpotlight factId={factSpotlightId} />}
                    <button className="button" onClick={nextSpotlightFact}>Another Fact</button>
                    {/* <div className="recDay">
                        <h3>Recycle Day Reminder</h3>

                        <h5>First tuesday of the month</h5>
                    </div> */}
{tipsSpotlightId && <TipsSpotlight tipId={tipsSpotlightId} />}
                    <button className="button" onClick={nextSpotlightTip}>Another Tip</button>
                </div>


                <div className="item3 locationContainer">
                    <h3 className="headerLocation">Recycling Drop-off Locations</h3>
                 
                    <div className="locationList">
                        <LocationList />
                    </div>


                </div>

                {/* <div className="item4 tipsHighlight">
                    


                </div> */}
            </div>
        </>
    )
}