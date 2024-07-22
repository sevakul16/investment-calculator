import React from "react";

const Calculator = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input type="number" placeholder="100000" />
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="number" placeholder="12000" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input type="number" placeholder="6" />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" placeholder="10" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
