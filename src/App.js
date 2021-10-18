import logo from "./logo.png";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [installment, setInstallment] = useState(0);

  // useEffect(() => {
  //   createPaymentPlan(amount);
  // }, [installment]);
  /**
   * This function calculates the installments for a purchase plan.
   * Assume there are always four installments.
   * The function need not return anything but should be used to display
   * the four installments back to the user after the user inputs a valid
   * dollar amount and clicks submit.
   * @param {number} amount the amount the customer intends to purchase
   */

  const dataObject = [
    { id: 1, order: "First", date: "2020" },
    {
      id: 2,
      order: "Second",
      date: "2020",
    },
    { id: 3, order: "Third", date: "2020" },
    { id: 4, order: "Forth", date: "2020" },
  ];

  const CreatePaymentPlan = ({ amount }) => {
    return dataObject.map((item, index) => (
      <li key={index}>
        <div>{item.date}</div>
        <div>{item.order} payment</div>
        <div>$ {amount}</div>
      </li>
    ));
  };

  const handleOnChange = (event) => {
    const amount = event.target.value;
    setAmount(amount);
    const obj = { paymentDate: "", paymentOrder: "", amount: "" };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let installmentAmount = (amount / 4).toFixed(2);
    setInstallment(installmentAmount);
  };
  console.log({ installment });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>How much do you plan to spend?</label>
          <input
            onChange={handleOnChange}
            type="float"
            id="amount"
            placeholder="$ "
          />
          <input type="submit" value="Submit" />
        </form>
        {installment > 0 && <CreatePaymentPlan amount={installment} />}
      </header>
    </div>
  );
}

export default App;
