const Calculator = ({ userInput, handleChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) => handleChange("investment", e.target.value)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
