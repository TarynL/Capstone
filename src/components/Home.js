import React, { useState, useEffect } from 'react';
import './Home.css'
import { getRandomFact } from "../modules/HomeManager";
import { FactSpotlight } from "../components/dashboard/FactSpotlight";
import { LocationSpotlight } from "../components/dashboard/LocationsSpotlight"
import { TipsSpotlight } from './dashboard/TipsSpotlight';


export const Home = () => {
    const [factSpotlightId, setFactId] = useState(0);
    // const [isLoading, setIsLoading] = useState(true)

    const nextSpotlightFact = () => {

        getRandomFact().then(setFactId);
        // setIsLoading(false)
    };

    useEffect(() => {
        nextSpotlightFact();
    }, []);

    return (
        <>

            <div className="grid-container">
                <div className="item1 title"><h1>Welcome to RecyclePedia</h1></div>
                <div className="item2 factHighlight">
                    <h3 className="header headerFact">Environmental Facts</h3>
                    {factSpotlightId && <FactSpotlight factId={factSpotlightId} />}
                    <button className="button" onClick={nextSpotlightFact}>Another Fact</button>
                </div>


                <div className="item3 locationHighlight">
                    <h3 className="header headerLocation">Drop-off Locations</h3>
                    <LocationSpotlight />

                </div>

                <div className="item4 tipsHighlight">
                    <h3 className="header headerTips">Tips on how to go Zero Waste</h3>
                    <TipsSpotlight />

                </div>
            </div>
        </>
    )
}