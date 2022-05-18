import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    });
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative= expense, positive= income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
