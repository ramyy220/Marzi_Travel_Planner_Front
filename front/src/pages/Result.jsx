import React, { useState, useEffect, useCallback } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/questions.css";
import DestinationsCard from "../components/UI/DestinationsCard";
import { useNavigate } from 'react-router-dom';  

const Result = () => {
  const [recommendedDestinations, setRecommendedDestinations] = useState([]);
  const navigate = useNavigate();

  
  const displayResult = useCallback(() => {
    getRecommendedDestinations();
  }, []);

    useEffect(() => {
        displayResult();
    }, [displayResult]);


  const restartDescisionTree = () => {
    localStorage.removeItem("recommandations");
    navigate('/questions');
  };

  const getRecommendedDestinations = () => {
    const recommandations = JSON.parse(localStorage.getItem("recommandations"));
    if (recommandations) {
      setRecommendedDestinations(recommandations);
    }
  };

  return (
    <Helmet title="Questions">
      <div>
        <main>
          <div>
            <div>
              <h2>Recommended Destinations</h2>
              <div className="dts" style={{ width: "200%", height: "200%" }}>
                {recommendedDestinations?.map((destination, index) => (
                  <DestinationsCard
                    item={destination}
                    
                  />
                ))}
              </div>
            </div>

            <button onClick={restartDescisionTree} className="mt-3">
              Restart
            </button>
          </div>
        </main>
      </div>
    </Helmet>
  );
};

export default Result;
