import React, { useState, useEffect } from 'react';
import './Home.css'
import { getRandomFact } from "../modules/HomeManager";
import { FactSpotlight } from "../components/dashboard/FactSpotlight";


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
                <div className="item3 factHighlight">
                    <h3 className="headerFact">Environmental Facts</h3>
                    {factSpotlightId && <FactSpotlight factId={factSpotlightId} />}
                    <button className="button" onClick={nextSpotlightFact}>Another Fact</button>
                </div>
            </div>
        </>
    )
}