import React, { useState, useEffect, useCallback } from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/questions.css';
import destinations from '../assets/data/Destinations';
import DestinationsCard from '../components/UI/DestinationsCard';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [isFinal, setIsFinal] = useState(false);
  const [recommendedDestinations, setRecommendedDestinations] = useState([]);
  const [restart, setRestart] = useState(false);
  const { navigate } = useNavigate();


  const startDecisionTree = useCallback(() => {
    getRecommendedDestinations();
    
    console.log('recommendedDestinations:', recommendedDestinations);
    if (!recommendedDestinations.length) {
      setIsLoading(true);
      fetch("http://localhost:5000/decision-tree/start")
        .then(res => res.json())
        .then(res => {
          setResponse(res);
          setIsFinal(res.is_final);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [recommendedDestinations]); 
  

  useEffect(() => {
    const recommendations = JSON.parse(localStorage.getItem('recommandations'));
    const res = JSON.parse(localStorage.getItem('res'));
    if (recommendations && res && res.is_final) {
      setRecommendedDestinations(recommendations);
      setResponse(res);
      setIsFinal(res.is_final);
    } else {
      getRecommendedDestinations();
    }
  },[isFinal, startDecisionTree]);
  
  useEffect(() => {
    if (recommendedDestinations.length === 0 && !isFinal) {
      startDecisionTree();
    }
  }, [recommendedDestinations]);

  useEffect(() => {
    if (restart) {
      startDecisionTree();
      setRestart(false);
    }else {
      startDecisionTree();
    }
  }, [restart]);
  
  

  const restartDescisionTree = () => {
    localStorage.removeItem('recommandations');
    setRecommendedDestinations([]);
    setResponse(null);
    setRestart(true);
  };

  const answerQuestion = (answer) => {
    setIsLoading(true);
    fetch("http://localhost:5000/decision-tree/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer }),
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('res', JSON.stringify(res));
        setResponse(res);
        setIsFinal(res.is_final);
        if (res.is_final) {
          filterDestinations(res.result);
          
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const filterDestinations = (result) => {
    let filteredDestinations = destinations.filter((dest) =>
      dest.adventureType === result
    );
    filteredDestinations = filteredDestinations.sort((a, b) => b.price - a.price);
    setRecommendedDestinations(filteredDestinations);
    localStorage.setItem('recommandations', JSON.stringify(filteredDestinations));
    navigate('/result');
  };

  const getRecommendedDestinations = () => {
    const recommandations = JSON.parse(localStorage.getItem('recommandations'));
    if (recommandations) {
      setRecommendedDestinations(recommandations);
      const res = JSON.parse(localStorage.getItem('res'));
      setIsFinal(true);
      setResponse(res);
    }
  };
  

  return (
    <Helmet title="Questions">
      <div>
        <main>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            response && (
              <div>
                {isFinal ? (
                  <div>
                    <div>
                    <h2>Recommended Destinations</h2>
                    <div className="dts"  style={{ width: '200%', height: '200%' }}>
                    {recommendedDestinations?.map((destination, index) => (
                    <DestinationsCard
                     item={destination}
                     isGreyedOut={index !== 0}
                    />
                      ))}
                    </div>
                  </div>
                    
                    <button onClick={restartDescisionTree} className="mt-3">Restart</button>
                    
                  </div>
                ) : (
                  <div>
                    <h2>Question: {response.question}</h2>
                    <div className="question">
                      {response.possible_values.map((value, index) => (
                        <button
                          className="questionBtn"
                          key={index}
                          onClick={() => answerQuestion(value)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </main>
      </div>
    </Helmet>
  );
};

export default Questions;