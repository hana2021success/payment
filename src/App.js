import logo from "./logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const dataObject = [
    { id: 1, order: "First", date: "2021 July 1st" },
    { id: 2, order: "Second", date: "2021 July 14th" },
    { id: 3, order: "Third", date: "2021 July 28th" },
    { id: 4, order: "Forth", date: "2021 August 12th" },
  ];
  const [amount, setAmount] = useState(0);
  const [installment, setInstallment] = useState(null);
  const CreatePaymentPlan = ({ amount }) => {
    const result = dataObject.map((item, index) => {
      console.log(index);
      return (
        <li className="item-container" key={index}>
          <div className="item">
            <div className="item-left">
              <div>{item.date}</div>
              <div>{item.order} Payment</div>
            </div>
            <div className="item-right">${amount}</div>
          </div>
        </li>
      );
    });
    console.log("23", result);
    return <ul>{result}</ul>;
  };

  const handleUpdateAmount = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const installment = amount / 4;
    setInstallment(installment);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>How much do you plan to spend?</label>
          <input onChange={handleUpdateAmount} type="float" id="amount" />
          <input type="submit" value="submit" />
        </form>
        <CreatePaymentPlan amount={installment} />
      </header>
    </div>
  );
}

export default App;
