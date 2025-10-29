import { useState } from "react";

function ExpenseInput(args) {
  const { nextId, handleAddData } = args;

  const [inputName, setInputName] = useState("");
  const [inputSum, setInputSum] = useState("");
  const [inputCategory, setInputCategory] = useState("");

  return (
    <div>
      <h2>Add new expense</h2>

      <input
        required
        placeholder="Name"
        onChange={(event) => {
          setInputName(event.target.value);
        }}
      />

      <input
        required
        placeholder="Sum"
        onChange={(event) => {
          setInputSum(event.target.value);
        }}
      />

      <input
        placeholder="Category"
        onChange={(event) => {
          setInputCategory(event.target.value);
        }}
      />

      <button
        onClick={() => {
          const addedData = {
            id: nextId,
            date: Date.now(),
            name: inputName ? inputName : "None",
            amount: inputSum ? Number(inputSum) : 0,
            category: inputCategory ? inputCategory : "None",
          };

          handleAddData(addedData);
          setInputName("");
          setInputSum("");
          setInputCategory("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default ExpenseInput;
