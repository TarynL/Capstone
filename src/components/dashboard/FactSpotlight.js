import React, { useState, useEffect } from "react";
import { getFactById } from "../../modules/HomeManager";
import "./Spotlight.css";

export const FactSpotlight = ({factId}) => {
  const [fact, setFact] = useState({});
  

  useEffect(() => {
    getFactById(factId).then(fact => {
      setFact(fact);
    });
  }, [factId]);

  return (
    <div className="fact-spotlight">
      <div>
      <img className="factImage img-fluid" src={fact.image} alt="fact"/>
        <p>{fact.fact}</p>
      </div>
    </div>
  );
};