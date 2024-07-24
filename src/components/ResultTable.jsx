import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

const ResultTable = ({ userInput }) => {
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].annualInvestment -
    annualData[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Investment (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map(
          ({ year, interest, valueEndOfYear, annualInvestment }, index) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmmountInvested = valueEndOfYear - initialInvestment;
            return (
              <tr key={index}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmmountInvested)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default ResultTable;
