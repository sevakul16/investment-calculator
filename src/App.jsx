import Calculator from "./components/Calculator";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 4,
  });

  const handleChange = (inputIdentifier, value) => {
    setUserInput({ ...userInput, [inputIdentifier]: value });
  };

  return (
    <>
      <Header />
      <Calculator userInput={userInput} handleChange={handleChange} />
      <ResultTable userInput={userInput} />
    </>
  );
}

export default App;
