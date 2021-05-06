import React, { useState, useEffect } from 'react'
import { getTipById } from "../../modules/HomeManager"
import "./Spotlight.css";

export const TipsSpotlight = ({ tipId }) => {
    const [tip, setTip] = useState({})

    useEffect(() => {
        getTipById(tipId)
            .then(tip => {
                setTip(tip)
            })
    }, [tipId])
    return (
    
            <div className="tip-spotlight">
                <div className="tipText">
                    <h3 className="header headerTip">Tips on going Zero Waste</h3>
                    <p>{tip.tip}</p>
                </div>
                <div className="">
                    <img className=" tipImage" src={tip.image} alt="tip" />
                </div>
            </div>

        
    )
}