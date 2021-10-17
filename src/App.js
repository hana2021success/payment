import logo from './logo.png';
import './App.css';
import React, { useEffect } from 'react';

function App() {

  /**
    * This function calculates the installments for a purchase plan.
    * Assume there are always four installments.
    * The function need not return anything but should be used to display
    * the four installments back to the user after the user inputs a valid
    * dollar amount and clicks submit.
    * @param {number} amount the amount the customer intends to purchase
  */
  const createPaymentPlan = amount => {
    console.log("Creating payment plan with amount: $", amount);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>How much do you plan to spend?</label>
          <input type="text" id="amount" />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
