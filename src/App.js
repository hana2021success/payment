import logo from "./logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [isAmountNotValid, setIsAmountNotValid] = useState(false);
  /**
   * This function calculates the installments for a purchase plan.
   * Assume there are always four installments.
   * The function need not return anything but should be used to display
   * the four installments back to the user after the user inputs a valid
   * dollar amount and clicks submit.
   * @param {number} amount the amount the customer intends to purchase
   */
  const createPaymentPlan = (amount) => {
    const installament = amount / 4;
    console.log("Creating payment plan with amount: $", installament);
  };

  const handleOnChange = (event) => {
    const amount = event.target.value;
    setAmount(amount);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPaymentPlan(amount);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAmountNotValid && <span>please enter numerical value</span>}
        <form onSubmit={handleSubmit}>
          <label>How much do you plan to spend?</label>
          <input
            onChange={handleOnChange}
            type="float"
            id="amount"
            placeholder="$"
          />
          <input disabled={isAmountNotValid} type="submit" value="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
