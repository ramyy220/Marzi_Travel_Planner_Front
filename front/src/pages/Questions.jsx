import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/questions.css";

const Questions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    startDecisionTree();
  }, []);

  const startDecisionTree = () => {
    setIsLoading(true);
    fetch("http://localhost:5000/decision-tree/start")
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setIsFinal(res.is_final);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const answerQuestion = (answer) => {
    setIsLoading(true);
    fetch("http://localhost:5000/decision-tree/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setIsFinal(res.is_final);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <Helmet title="Questions">
      <div className="questions-container">
        <main>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            response && (
              <div>
                {isFinal ? (
                  <div>
                    <h2>Result: {response.result}</h2>
                    <button onClick={startDecisionTree}>Restart</button>
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
