import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [installment, setInstallment] = useState(0);
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

  const creatPaymentPlan = ({ amount }) => {
    return dataObject.map((item, index) => (
      <li key={index}>
        <div>{item.data}</div>
        <div>{item.order} payment</div>
        <div>$ {amount}</div>
      </li>
    ));
  };

  const handleOnChange = (event) => {
    const amount = event.target.value;
    setAmount(amount);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let installmentAmount = (amount / 4).toFixed(2);
    setInstallment(installmentAmount);
  };

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
          <input type="submit" value="submit" />
        </form>
        {installment > 0 && <createPaymentPlan amount={installment} />}
      </header>
    </div>
  );
}

export default App;
